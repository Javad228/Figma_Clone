"use client"; // Next.js app router

import React, {
    useEffect,
    useRef,
    forwardRef,
    useImperativeHandle,
} from "react";
import { fabric } from "fabric";

export interface CanvasHandles {
    addRect: () => void;
    addFrame: () => void;
    // You can expose more methods if needed
}

const CanvasComponent = forwardRef<CanvasHandles>((props, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fabricCanvasRef = useRef<fabric.Canvas | null>(null);
    const isAddingRectRef = useRef<boolean>(false); // Ref to track add rectangle mode
    const isAddingFrameRef = useRef<boolean>(false); // Ref to track add rectangle mode

    // Initialize the Fabric canvas
    const initCanvas = () => {
        if (canvasRef.current) {
            const container = canvasRef.current.parentElement;
            if (container) {
                const { clientWidth, clientHeight } = container;

                const fabricCanvas = new fabric.Canvas(canvasRef.current, {
                    backgroundColor: "black",
                    width: clientWidth,
                    height: clientHeight,
                    selection: true,
                });

                // Global settings for Fabric objects
                fabric.Object.prototype.transparentCorners = false;
                fabric.Object.prototype.cornerColor = "#2BEBC8";
                fabric.Object.prototype.cornerStyle = "rect";
                fabric.Object.prototype.cornerStrokeColor = "#2BEBC8";
                fabric.Object.prototype.cornerSize = 6;

                // Add event listener for mouse clicks
                fabricCanvas.on("mouse:down", handleCanvasClick);

                fabricCanvas.requestRenderAll();

                fabricCanvasRef.current = fabricCanvas;
            }
        }
    };

    // Handle canvas resizing
    const resizeCanvas = () => {
        if (canvasRef.current && fabricCanvasRef.current) {
            const container = canvasRef.current.parentElement;
            if (container) {
                const { clientWidth, clientHeight } = container;
                fabricCanvasRef.current.setWidth(clientWidth);
                fabricCanvasRef.current.setHeight(clientHeight);
                fabricCanvasRef.current.renderAll();
            }
        }
    };

    // Handle canvas click events
    const handleCanvasClick = (options: fabric.IEvent) => {
        if (isAddingRectRef.current && fabricCanvasRef.current) {
            const pointer = fabricCanvasRef.current.getPointer(options.e);
            const rect = new fabric.Rect({
                height: 280,
                width: 200,
                stroke: "#2BEBC8",
                fill: "transparent",
                left: pointer.x,
                top: pointer.y,
            });
            fabricCanvasRef.current.add(rect);
            fabricCanvasRef.current.requestRenderAll();

            // Reset the mode
            isAddingRectRef.current = false;
        }else if (isAddingFrameRef.current && fabricCanvasRef.current) {
            const pointer = fabricCanvasRef.current.getPointer(options.e);
            const rect = new fabric.Rect({
                height: 280,
                width: 200,
                stroke: "#2BEBC8",
                fill: "white",
                left: pointer.x,
                top: pointer.y,
            });
            fabricCanvasRef.current.add(rect);
            fabricCanvasRef.current.requestRenderAll();

            // Reset the mode
            isAddingFrameRef.current = false;
        }
    };

    useEffect(() => {
        initCanvas();

        // Add window resize listener
        window.addEventListener("resize", resizeCanvas);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (fabricCanvasRef.current) {
                fabricCanvasRef.current.off("mouse:down", handleCanvasClick);
                fabricCanvasRef.current.dispose();
                fabricCanvasRef.current = null;
            }
        };
    }, []);

    // Expose methods to parent components
    useImperativeHandle(ref, () => ({
        addFrame: () => {
            isAddingFrameRef.current = true;
            // if (fabricCanvasRef.current) {
            //     const rect = new fabric.Rect({
            //         height: 280,
            //         width: 200,
            //         stroke: "#2BEBC8",
            //         fill: "white",
            //         left: 100,
            //         top: 60,
            //     });
            //     fabricCanvasRef.current.add(rect);
            //     fabricCanvasRef.current.requestRenderAll();
            // }
        },
        addRect: () => {
            // Set the mode to add rectangle on next canvas click
            isAddingRectRef.current = true;
        },

        // You can expose more methods here if needed
    }));

    return (
        <div className="w-full h-full">
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
});

export default CanvasComponent;

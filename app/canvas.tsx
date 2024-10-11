"use client"; // next.js app router

import React, { useState, useEffect } from "react";
import { fabric } from 'fabric'; // Correct import for fabric.js

const CanvasComponent = () => {
    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

    useEffect(() => {
        const canvasElement = document.getElementById('canvas') as HTMLCanvasElement;

        if (canvasElement) {
            const c = new fabric.Canvas(canvasElement, {
                backgroundColor: "black",
            });

            // Settings for all canvas objects in the app
            fabric.Object.prototype.transparentCorners = false;
            fabric.Object.prototype.cornerColor = "#2BEBC8";
            fabric.Object.prototype.cornerStyle = "rect";
            fabric.Object.prototype.cornerStrokeColor = "#2BEBC8";
            fabric.Object.prototype.cornerSize = 6;


            c.requestRenderAll();

            setCanvas(c);

            return () => {
                c.dispose();
            };
        }

    }, []);

    const addRect = () => {
        if (canvas) {
            const rect = new fabric.Rect({
                height: 280,
                width: 200,
                stroke: "#2BEBC8",
                fill: "transparent",
                left: 100,
                top: 60,
            });
            canvas.add(rect);
            canvas.requestRenderAll();
        }
    };

    return (
        <div className="w-full h-full">
            <button onClick={addRect}>Add Rectangle</button>
            <canvas id="canvas" className="w-full h-full" />
        </div>
    );
};

export default CanvasComponent;

"use client";

import React, { useRef } from "react";
import Canvas, { CanvasHandles } from "./canvas";
import FloatingDockDemo from "./FloatingDockDemo";

export default function Page() {
    const canvasRef = useRef<CanvasHandles>(null);

    // Function to handle adding a rectangle
    const handleAddRect = () => {
        canvasRef.current?.addRect();
    };

    const handleAddFrame = () => {
        canvasRef.current?.addFrame();
    };

    return (
        <div className="h-screen w-screen flex flex-col justify-between">
            <div className="relative items-center dark mr-auto ml-auto h-[100%] w-full">
                <Canvas ref={canvasRef}/>

                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center ">
                    <FloatingDockDemo onShapesClick={handleAddRect} onFrameClick={handleAddFrame}/>
                </div>
            </div>
        </div>
    );
}

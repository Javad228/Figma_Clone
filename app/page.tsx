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

    return (
        <div className="h-screen w-screen flex flex-col justify-between">
            <div className="items-center dark mr-auto ml-auto h-[90%] w-full">
                <Canvas ref={canvasRef} />
            </div>
            <div className="items-center w-min dark mr-auto ml-auto mt-auto">
                <FloatingDockDemo onShapesClick={handleAddRect} />
            </div>
        </div>
    );
}

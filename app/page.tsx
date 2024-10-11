"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconTriangleSquareCircle,
    IconHandStop,
    IconPencil,
    IconTextColor,
} from "@tabler/icons-react";
import Canvas from "./canvas"

export function FloatingDockDemo() {
    const links = [
        {
            title: "Hand",
            icon: (
                <IconHandStop className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Shapes",
            icon: (
                <IconTriangleSquareCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Pencil",
            icon: (
                <IconPencil className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Text",
            icon: (
                <IconTextColor className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        }
    ];
    return (

            <FloatingDock
                mobileClassName="mb-10" desktopClassName="mb-10"
                items={links}
            />


    );
}

export default function Page() {
    return (
        <div className="h-screen w-screen flex flex-col justify-between">
            <div className="items-center dark mr-auto ml-auto w-min-full">
                <Canvas></Canvas>
            </div>
            <div className="items-center w-min dark mr-auto ml-auto mt-auto">
                <FloatingDockDemo/>
            </div>
        </div>

    );
}
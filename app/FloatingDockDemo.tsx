"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconTriangleSquareCircle,
    IconHandStop,
    IconPencil,
    IconTextColor,
} from "@tabler/icons-react";

interface FloatingDockDemoProps {
    onShapesClick: () => void;
}

export function FloatingDockDemo({ onShapesClick }: FloatingDockDemoProps) {
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
            onClick: onShapesClick, // Assign the onClick handler
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
        },
    ];

    return (
        <FloatingDock
            mobileClassName="mb-10"
            desktopClassName="mb-10"
            items={links}
        />
    );
}

export default FloatingDockDemo;

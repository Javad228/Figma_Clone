"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconTriangleSquareCircle,
    IconHandStop,
    IconPencil,
    IconTextColor,
    IconFrame,
} from "@tabler/icons-react";

interface FloatingDockDemoProps {
    onShapesClick: () => void;
    onFrameClick: () => void;
}

export function FloatingDockDemo({ onShapesClick, onFrameClick }: FloatingDockDemoProps) {
    const links = [
        {
            title: "Hand",
            icon: (
                <IconHandStop className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Frame",
            icon: (
                <IconFrame className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            onClick: onFrameClick,
        },
        {
            title: "Shapes",
            icon: (
                <IconTriangleSquareCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            onClick: onShapesClick,
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

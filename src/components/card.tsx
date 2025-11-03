import * as React from "react"

import { cn } from "@/lib/utils"
import { MotionCard as MotionCardBase } from "@/components/ui/motion"

type CardProps = React.ComponentProps<"div"> & {
    /** Render the card with motion variants when true */
    animated?: boolean
}

function Card({ className, animated = false, ...props }: CardProps) {
    const classes = cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
    )

    if (animated) {
        // Render motion-backed card when requested. Props are cast to any to satisfy
        // the motion component's prop signature which conflicts with div props.
        return (
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            <MotionCardBase data-slot="card" className={classes} {...(props as any)} />
        )
    }

    return (
        <div data-slot="card" className={classes} {...props} />
    )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={cn(
                "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
                className
            )}
            {...props}
        />
    )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-title"
            className={cn("font-semibold text-base/6 sm:text-lg/6", className)}
            {...props}
        />
    )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-description"
            className={cn("text-muted-foreground text-base/6 sm:text-sm/6", className)}
            {...props}
        />
    )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-action"
            className={cn(
                "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
                className
            )}
            {...props}
        />
    )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={cn("px-6", className)}
            {...props}
        />
    )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-footer"
            className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
            {...props}
        />
    )
}

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
}

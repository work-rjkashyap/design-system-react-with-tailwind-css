import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { forwardRef } from "react";
import { MotionButton, motionTokens } from "./motion";


const button = cva(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius)] px-4 py-2 font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-60",
    {
        variants: {
            variant: {
                default: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:brightness-95 active:brightness-90",
                secondary: "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:brightness-95",
                ghost: "bg-transparent text-[var(--primary)] hover:bg-[var(--muted)]",
                destructive: "bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:brightness-95",
            },
            size: {
                sm: "text-sm px-3 py-1.5",
                md: "text-base px-4 py-2",
                lg: "text-base px-5 py-2.5",
            },
        },
        defaultVariants: { variant: "default", size: "md" },
    }
);


type MotionButtonBaseProps = ComponentPropsWithoutRef<typeof MotionButton>;

export interface ButtonProps
    extends Omit<MotionButtonBaseProps, "className" | "children">,
    VariantProps<typeof button> {
    className?: string;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    children?: ReactNode;
}


const ICON_SIZE_MAP: Record<"sm" | "md" | "lg", string> = {
    sm: "h-4 w-4 [&_svg]:h-[0.875rem] [&_svg]:w-[0.875rem]",
    md: "h-4 w-4 [&_svg]:h-4 [&_svg]:w-4",
    lg: "h-5 w-5 [&_svg]:h-5 [&_svg]:w-5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            leadingIcon,
            trailingIcon,
            children,
            type = "button",
            transition,
            whileHover,
            ...props
        },
        ref
    ) => {
        const resolvedSize = (size ?? "md") as keyof typeof ICON_SIZE_MAP;
        const iconClass = clsx(
            "inline-flex shrink-0 items-center justify-center text-current",
            ICON_SIZE_MAP[resolvedSize]
        );

        return (
            <MotionButton
                ref={ref}
                className={clsx(
                    button({ variant, size }),
                    "transition-colors duration-150 ease-[var(--ease-brand)]",
                    className
                )}
                type={type}
                transition={
                    transition ?? {
                        duration: motionTokens.durations.micro,
                        ease: motionTokens.easing.brand,
                    }
                }
                whileHover={whileHover ?? { scale: 1.02 }}
                {...props}
            >
                {leadingIcon ? <span className={iconClass}>{leadingIcon}</span> : null}
                {children}
                {trailingIcon ? <span className={iconClass}>{trailingIcon}</span> : null}
            </MotionButton>
        );
    }
);

Button.displayName = "Button";

import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";


const button = cva(
    "micro-press animate-micro-scale-in inline-flex items-center justify-center gap-2 rounded-[var(--radius)] px-4 py-2 font-medium transition-colors duration-[var(--dur-2)] ease-[var(--ease-brand)] focus:outline-none disabled:pointer-events-none disabled:opacity-60",
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


export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
}


const ICON_SIZE_MAP: Record<"sm" | "md" | "lg", string> = {
    sm: "h-4 w-4 [&_svg]:h-[0.875rem] [&_svg]:w-[0.875rem]",
    md: "h-4 w-4 [&_svg]:h-4 [&_svg]:w-4",
    lg: "h-5 w-5 [&_svg]:h-5 [&_svg]:w-5",
};

export function Button({
    className,
    variant,
    size,
    leadingIcon,
    trailingIcon,
    children,
    type = "button",
    ...props
}: ButtonProps) {
    const resolvedSize = (size ?? "md") as keyof typeof ICON_SIZE_MAP;
    const iconClass = clsx(
        "inline-flex shrink-0 items-center justify-center text-current",
        ICON_SIZE_MAP[resolvedSize]
    );

    return (
        <button className={clsx(button({ variant, size }), className)} type={type} {...props}>
            {leadingIcon ? <span className={iconClass}>{leadingIcon}</span> : null}
            {children}
            {trailingIcon ? <span className={iconClass}>{trailingIcon}</span> : null}
        </button>
    );
}

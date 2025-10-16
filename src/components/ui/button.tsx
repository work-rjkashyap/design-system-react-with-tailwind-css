import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from "react";


const button = cva(
    "inline-flex items-center justify-center rounded-[var(--radius)] px-4 py-2 font-medium transition duration-150 ease-linear focus:outline-none",
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
    VariantProps<typeof button> { }


export function Button({ className, variant, size, ...props }: ButtonProps) {
    return <button className={clsx(button({ variant, size }), className)} {...props} />;
}

import { twMerge } from "tailwind-merge"

type HeadingType = { level?: 1 | 2 | 3 | 4 } & React.ComponentPropsWithoutRef<
    "h1" | "h2" | "h3" | "h4"
>

interface HeadingProps extends HeadingType {
    tracking?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest"
    className?: string | undefined
}

const Heading = ({ className, level = 1, tracking = "tight", ...props }: HeadingProps) => {
    const Element: `h${typeof level}` = `h${level}`
    return (
        <Element
            className={twMerge(
                "font-sans text-fg",
                tracking === "tighter" && "tracking-tighter",
                tracking === "tight" && "tracking-tight",
                tracking === "normal" && "tracking-normal",
                tracking === "wide" && "tracking-wide",
                tracking === "wider" && "tracking-wider",
                tracking === "widest" && "tracking-widest",
                level === 1 && "font-semibold text-xl/8 sm:text-2xl/8",
                level === 2 && "font-semibold text-lg/6 sm:text-xl/8",
                level === 3 && "font-semibold text-base/6 sm:text-lg/6",
                level === 4 && "font-semibold text-base/6",
                className,
            )}
            {...props}
        />
    )
}

export type { HeadingProps }
export { Heading }

import { Laptop, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="secondary"
                    size="md"
                    className="relative"
                    leadingIcon={theme === "light" ? (
                        <Sun className="scale-100 rotate-0 transition-all dark:-rotate-90 dark:scale-0" />
                    ) : theme === "dark" ? (
                        <Moon className="scale-100 rotate-0 transition-all dark:-rotate-90 dark:scale-0" />
                    ) : (
                        <Laptop className="scale-100 rotate-0 transition-all dark:-rotate-90 dark:scale-0" />
                    )}
                >
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun aria-hidden className="text-amber-500 dark:text-amber-400" />
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Moon aria-hidden className="text-indigo-500 dark:text-indigo-300" />
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    <Laptop aria-hidden className="text-muted-foreground" />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

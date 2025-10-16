import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent as CardBody,
    CardFooter,
    CardAction,
} from "@/components/card";
import { ThemeProvider, useTheme } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle";



export default function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

            <div className="min-h-dvh">
                <header className="container-app flex items-center justify-between py-4">
                    <h1 className="text-xl font-semibold">CODX</h1>
                    <div className="flex gap-2">
                        <ModeToggle />
                        <Button
                            onClick={() =>
                                document.documentElement.setAttribute("data-brand", "india")
                            }
                        >
                            Brand: India
                        </Button>
                    </div>
                </header>


                <main className="container-app grid gap-6 sm:grid-cols-2">
                    <Card animated>
                        <CardHeader>
                            <div>
                                <CardTitle>Card</CardTitle>
                                <CardDescription>Tokenized theme in action.</CardDescription>
                            </div>
                            <CardAction>
                                <ModeToggle />
                            </CardAction>
                        </CardHeader>

                        <CardBody>
                            <ThemeControls />
                        </CardBody>

                        <CardFooter>
                            <div className="flex gap-2">
                                <Button>Primary</Button>
                                <Button variant="ghost">Secondary</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </main>
            </div>
        </ThemeProvider>
    );
}

function ThemeControls() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex flex-col gap-3">
            <div className="text-sm">Current theme: <strong className="ml-2">{theme}</strong></div>
            <div className="flex gap-2">
                <Button onClick={() => setTheme("light")}>Light</Button>
                <Button onClick={() => setTheme("dark")}>Dark</Button>
                <Button onClick={() => setTheme("system")}>System</Button>
            </div>
        </div>
    )
}

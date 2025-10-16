import { Button } from "@/components/ui/button";
import { Card } from "@/components/card";
import { ThemeProvider } from "@/components/theme-provider"
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
                    <Card>
                        <h2 className="text-lg font-semibold mb-2">Card</h2>
                        <p className="text-sm opacity-80">Tokenized theme in action.</p>
                        <Button className="mt-4">Primary</Button>
                    </Card>
                </main>
            </div>
        </ThemeProvider>
    );
}

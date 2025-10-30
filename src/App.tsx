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
import { Sidebar } from './components/ui/sidebar';
import { Home, Settings, User, FileText } from 'lucide-react';


export default function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">


            <div className="flex h-screen bg-background text-foreground">
                <Sidebar.Root defaultOpen={true}>
                    <Sidebar.Header>
                        <Sidebar.Title>My App</Sidebar.Title>
                        <Sidebar.Toggle />
                    </Sidebar.Header>

                    <Sidebar.Content>
                        <Sidebar.Label>Navigation</Sidebar.Label>
                        <Sidebar.Group>
                            <Sidebar.Item icon={Home} href="#" active>
                                Dashboard
                            </Sidebar.Item>
                            <Sidebar.Item icon={User} href="#">
                                Profile
                            </Sidebar.Item>
                            <Sidebar.Item icon={FileText} href="#">
                                Documents
                            </Sidebar.Item>
                        </Sidebar.Group>

                        <Sidebar.Separator />

                        <Sidebar.Label>Settings</Sidebar.Label>
                        <Sidebar.Group>
                            <Sidebar.Item
                                icon={Settings}
                                onClick={() => console.log('Settings clicked')}
                            >
                                Settings
                            </Sidebar.Item>
                        </Sidebar.Group>
                    </Sidebar.Content>

                    <Sidebar.Footer>
                        <Sidebar.User
                            name="John Doe"
                            email="john@example.com"
                        />
                    </Sidebar.Footer>
                </Sidebar.Root>

                {/* Main Content */}
                <main className="flex-1 p-8 overflow-auto"><div className="min-h-dvh">
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


                    <main className="container-app grid gap-6 sm:grid-cols-2 ">
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
                </div></main>

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

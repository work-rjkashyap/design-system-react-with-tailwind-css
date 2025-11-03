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
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";


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
                        <Heading level={1}>
                            CODX
                        </Heading>
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


                    <main className="container-app grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Typography Showcase */}
                        <Card animated>
                            <CardHeader>
                                <div>
                                    <CardTitle>IntentUI Typography</CardTitle>
                                    <CardDescription>Typography following IntentUI patterns with standard Tailwind classes.</CardDescription>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="space-y-4">
                                    <div>
                                        <Heading level={1}>Heading Level 1</Heading>
                                        <Heading level={2}>Heading Level 2</Heading>
                                        <Heading level={3}>Heading Level 3</Heading>
                                        <Heading level={4}>Heading Level 4</Heading>
                                    </div>
                                    <div>
                                        <Text>This is the default Text component using IntentUI patterns: text-base/6 text-muted-fg sm:text-sm/6</Text>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        {/* Theme Controls */}
                        <Card animated>
                            <CardHeader>
                                <div>
                                    <CardTitle>Theme Controls</CardTitle>
                                    <CardDescription>Switch between light and dark themes.</CardDescription>
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
                                    <Button variant="ghost">Ghost</Button>
                                </div>
                            </CardFooter>
                        </Card>

                        {/* Button Showcase */}
                        <Card animated>
                            <CardHeader>
                                <div>
                                    <CardTitle>Button Sizes</CardTitle>
                                    <CardDescription>Button components with IntentUI typography sizing.</CardDescription>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Button size="sm">Small Button</Button>
                                        <Button size="md">Medium Button</Button>
                                        <Button size="lg">Large Button</Button>
                                    </div>
                                </div>
                            </CardBody>
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
            <Text>
                Current theme: <strong className="ml-2">{theme}</strong>
            </Text>
            <div className="flex gap-2">
                <Button onClick={() => setTheme("light")}>Light</Button>
                <Button onClick={() => setTheme("dark")}>Dark</Button>
                <Button onClick={() => setTheme("system")}>System</Button>
            </div>
        </div>
    )
}

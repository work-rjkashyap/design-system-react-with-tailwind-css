import { useState } from 'react';
import { SidebarContext } from './SidebarContext';
import type { SidebarRootProps } from './types';

export const SidebarRoot: React.FC<SidebarRootProps> = ({
    children,
    defaultOpen = true,
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
            <aside
                className={`${isOpen ? 'w-64' : 'w-20'
                    } bg-sidebar text-sidebar-foreground transition-all duration-300 ease-in-out flex flex-col ${className}`}
            >
                {children}
            </aside>
        </SidebarContext.Provider>
    );
};

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
                    } bg-gray-900 text-white transition-all duration-300 ease-in-out flex flex-col ${className}`}
            >
                {children}
            </aside>
        </SidebarContext.Provider>
    );
};

import { createContext, useContext } from 'react';
import type { SidebarContextValue } from './types';

export const SidebarContext = createContext<SidebarContextValue | undefined>(undefined);

export const useSidebar = (): SidebarContextValue => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('Sidebar components must be used within Sidebar.Root');
    }
    return context;
};

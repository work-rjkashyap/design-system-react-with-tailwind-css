import { useSidebar } from './SidebarContext';
import type { SidebarTitleProps } from './types';

export const SidebarTitle: React.FC<SidebarTitleProps> = ({
    children,
    className = ''
}) => {
    const { isOpen } = useSidebar();

    return (
        <h1
            className={`text-sidebar-foreground font-semibold text-base/6 sm:text-lg/6 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 w-0'
                } ${className}`}
        >
            {children}
        </h1>
    );
};

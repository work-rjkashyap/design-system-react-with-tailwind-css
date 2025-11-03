import { useSidebar } from './SidebarContext';
import type { SidebarLabelProps } from './types';

export const SidebarLabel: React.FC<SidebarLabelProps> = ({
    children,
    className = ''
}) => {
    const { isOpen } = useSidebar();

    return (
        <div
            className={`px-3 py-2 text-muted-foreground uppercase tracking-wider font-semibold text-xs/6 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
                } ${className}`}
        >
            {children}
        </div>
    );
};

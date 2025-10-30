import { useSidebar } from './SidebarContext';
import type { SidebarLabelProps } from './types';

export const SidebarLabel: React.FC<SidebarLabelProps> = ({
    children,
    className = ''
}) => {
    const { isOpen } = useSidebar();

    return (
        <div
            className={`px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
                } ${className}`}
        >
            {children}
        </div>
    );
};

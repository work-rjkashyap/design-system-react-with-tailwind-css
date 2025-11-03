import { Menu, X } from 'lucide-react';
import { useSidebar } from './SidebarContext';
import type { SidebarToggleProps } from './types';

export const SidebarToggle: React.FC<SidebarToggleProps> = ({
    className = ''
}) => {
    const { isOpen, setIsOpen } = useSidebar();

    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg hover:bg-sidebar-accent transition-colors text-sidebar-foreground hover:text-sidebar-accent-foreground ${className}`}
            aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
    );
};

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
            className={`p-2 rounded-lg hover:bg-gray-800 transition-colors ${className}`}
            aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
    );
};

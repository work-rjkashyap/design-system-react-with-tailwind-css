import { useSidebar } from './SidebarContext';
import type { SidebarItemProps } from './types';

export const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon,
    children,
    href = '#',
    active = false,
    onClick,
    className = ''
}) => {
    const { isOpen } = useSidebar();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
    };

    return (
        <li>
            <a
                href={href}
                onClick={handleClick}
                className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${active
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground'
                    } ${className}`}
            >
                {Icon && <Icon size={20} className="flex-shrink-0" />}
                <span
                    className={`transition-opacity duration-300 whitespace-nowrap ${isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
                        }`}
                >
                    {children}
                </span>
            </a>
        </li>
    );
};

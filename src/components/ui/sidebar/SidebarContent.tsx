import type { SidebarContentProps } from './types';

export const SidebarContent: React.FC<SidebarContentProps> = ({
    children,
    className = ''
}) => {
    return (
        <nav className={`flex-1 p-4 overflow-y-auto ${className}`}>
            {children}
        </nav>
    );
};

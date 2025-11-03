import type { SidebarHeaderProps } from './types';

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
    children,
    className = ''
}) => {
    return (
        <div className={`flex items-center justify-between p-4 border-b border-sidebar-border ${className}`}>
            {children}
        </div>
    );
};

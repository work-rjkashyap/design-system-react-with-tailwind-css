import type { SidebarGroupProps } from './types';

export const SidebarGroup: React.FC<SidebarGroupProps> = ({
    children,
    className = ''
}) => {
    return (
        <ul className={`space-y-2 ${className}`}>
            {children}
        </ul>
    );
};

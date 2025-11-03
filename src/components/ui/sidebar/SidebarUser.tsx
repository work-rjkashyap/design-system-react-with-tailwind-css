import { User } from 'lucide-react';
import { useSidebar } from './SidebarContext';
import type { SidebarUserProps } from './types';

export const SidebarUser: React.FC<SidebarUserProps> = ({
    name,
    email,
    avatar,
    className = ''
}) => {
    const { isOpen } = useSidebar();

    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <div className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center flex-shrink-0 text-sidebar-accent-foreground">
                {avatar || <User size={20} />}
            </div>
            <div
                className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
                    }`}
            >
                {name && (
                    <p className="text-sidebar-foreground font-semibold text-sm/6">
                        {name}
                    </p>
                )}
                {email && (
                    <p className="text-muted-foreground text-xs/6">
                        {email}
                    </p>
                )}
            </div>
        </div>
    );
};

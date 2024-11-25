'use client';

import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface AuthWrapperProps {
    children: ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
    const { data: session } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    const handleEvent = (event: React.MouseEvent) => {
        if (!session) {
            router.push(`/login?callbackUrl=${pathname}`);
            event.preventDefault();
            return;
        }
    };

    return (
        <div data-wrapper onClick={handleEvent}>
            {children}
        </div>
    );
};

export default AuthWrapper;

import AuthWrapper from '@/components/auth/AuthWrapper';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div>Home page</div>
            <AuthWrapper>
                <div>
                    <Link href='/profile'>go to profile page</Link>
                </div>
            </AuthWrapper>
        </div>
    );
};

export default HomePage;

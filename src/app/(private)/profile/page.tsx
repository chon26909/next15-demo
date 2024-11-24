'use client';
import Button from '@/components/button/ฺButton';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

const ProfilePage = () => {
    const session = useSession();

    const handleSignOut = async () => {
        signOut();
    };

    return (
        <div>
            <div>ProfilePage</div>
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <Button type='button' variant='solid' onClick={handleSignOut}>
                signOut
            </Button>
        </div>
    );
};

export default ProfilePage;

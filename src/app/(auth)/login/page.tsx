'use client';
import React, { useRef } from 'react';
import Button from '@/components/button/ฺButton';
import TextInput from '@/components/input/TextInput';
import Text from '@/components/text/Text';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (!email || !password) {
            console.log('Please fill in both email and password');
            return;
        }

        const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        console.log('result: ' + JSON.stringify(result));

        if (result?.ok) {
            console.log('Login successful!');
            const url = String(result.url);
            const callbackUrl = new URL(url).searchParams.get('callbackUrl') || '/';
            router.push(callbackUrl);
        } else {
            console.log('Login failed:', result?.error);
        }
    };

    return (
        <div className='h-screen w-screen p-5 flex justify-center items-center bg-orange-500'>
            <form onSubmit={handleLogin}>
                <div className='max-w-[400px] bg-white rounded-xl shadow-2xl p-10'>
                    <Text.Header className='mb-3 text-center'>Login</Text.Header>
                    <TextInput
                        ref={emailRef}
                        label='Email'
                        type='text'
                        name='email'
                        width='full'
                        defaultValue='chon@gmail.com'
                    />
                    <TextInput
                        ref={passwordRef}
                        label='Password'
                        type='password'
                        name='password'
                        width='full'
                        defaultValue='1234'
                    />
                    <Button type='submit' variant='solid' width='full'>
                        Login
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;

import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                console.log('authorize credentials', credentials);

                // ตรวจสอบว่ามีข้อมูลครบหรือไม่
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Missing email or password');
                }

                // ตรวจสอบอีเมล
                if (credentials.email !== 'chon@gmail.com') {
                    throw new Error('Invalid email');
                }

                // ตรวจสอบรหัสผ่าน
                if (credentials.password !== '1234') {
                    throw new Error('Invalid password');
                }

                // หากข้อมูลถูกต้อง return ข้อมูลผู้ใช้
                return {
                    id: '1',
                    name: 'Chon',
                    email: 'chon@gmail.com',
                    role: 'member',
                    level: 'Platinum',
                };
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role; // เก็บ role ใน JWT
                token.level = user.level; // เก็บ level ใน JWT
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    ...session.user, // เก็บข้อมูลเดิม
                    id: token.sub as string,
                    role: token.role, // เพิ่ม role ใน session
                    level: token.level, // เพิ่ม level ใน session
                };
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

// Export named HTTP methods
export { handler as GET, handler as POST };

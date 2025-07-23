import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Здесь проверка логина/пароля (в реальном проекте нужно хеширование)
        if (credentials?.username === process.env.ADMIN_USER && 
            credentials?.password === process.env.ADMIN_PASSWORD) {
          return { id: '1', name: 'Admin' };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/admin/login',
  }
});

export { handler as GET, handler as POST };

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token, user }) {
    
      if (token?.isAdmin) {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    async jwt({ token, user }) {
      // Add the role to the token (if available in the user object)
      if (user?.isAdmin) {
        token.role = user.isAdmin;
      }
      return token;
    },
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isAdmin = auth?.user?.isAdmin; 
      console.log(auth)// Assuming your user object has an isAdmin property
      const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');
      
      if (isOnDashboard) {
        if (isLoggedIn) {
          // If you have admin-only dashboard sections
          if (request.nextUrl.pathname.startsWith('/dashboard/') && !isAdmin) {
            return Response.redirect(new URL('/', request.nextUrl));
          }
          return true;
        }
        return false; // Redirect to login page if not logged in
      }
      
      return true; // Allow access to all non-dashboard routes
    },
  },
  providers: [], // Add your authentication providers here
};
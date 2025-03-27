export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isAdmin = auth?.user?.isAdmin; // Check if the user is an admin
      const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');

    
      if (isOnDashboard && (!isLoggedIn || !isAdmin)) {
        return Response.redirect(new URL('/login', request.nextUrl));
      }

      return true; // Allow access to other pages
    },
  },
  providers: [], // Add providers as needed
};

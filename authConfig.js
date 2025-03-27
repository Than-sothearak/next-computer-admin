export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');
      const isOnHome = request.nextUrl.pathname === '/';
  
      if (isOnDashboard) {
        return isLoggedIn; // Protect dashboard
      }
      if (isLoggedIn && !isOnHome) {
        return Response.redirect(new URL('/dashboard', request.nextUrl)); // Redirect non-home routes
      }
      return true; // Allow home and other public routes
    },
  },
  providers: [], // Add providers with an empty array for now
};
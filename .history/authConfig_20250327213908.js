export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
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
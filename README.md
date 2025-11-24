# Startup - Free Next.js Startup Website Template

Startup is a free, open-source, and premium-quality [**Next.js startup website template**](https://nextjstemplates.com/templates/startup) that comes with everything you need to launch a startup, business, or SaaS website, including all essential sections, components, and pages.

If you're looking for a high-quality and visually appealing, feature-rich Next.js Template for your next startup, SaaS, or business website, this is the perfect choice and starting point for you!

### ✨ Key Features
- Crafted for Startup and SaaS Business
- Next.js and Tailwind CSS
- All Essential Business Sections and Pages
- High-quality and Clean Design
- Dark and Light Version
- TypeScript Support
- Supabase Authentication (Email/Password & OAuth)
- User Management with Database
- Node.js Backend API Routes
- Vercel Ready (Frontend + Backend in One Structure)
and Much More ...

### 🙌 Detailed comparison between the Free and Pro versions of Startup

| Feature             | Free | Pro |
|---------------------|------------|----------|
| Next.js Landing Page             | ✅ Yes      | ✅ Yes      |
| All The Integrations - Auth, DB, Payments, Blog and many more ...             | ❌ No      | ✅ Yes |
| Homepage Variations             | 1      | 2 |
| Additional SaaS Pages and Components             | ❌ No      | ✅ Yes |
| Functional Blog with Sanity       | ❌ No      | ✅ Yes |
| Use with Commercial Projects            | ✅ Yes      | ✅ Yes      |
| Lifetime Free Updates             | ✅ Yes      | ✅ Yes |
| Email Support       | ❌ No         | ✅ Yes       |
| Community Support         | ✅ Yes         | ✅ Yes       |


### [🔥 Get Startup Pro](https://nextjstemplates.com/templates/saas-starter-startup)

[![Startup Pro](https://raw.githubusercontent.com/NextJSTemplates/startup-nextjs/main/startup-pro.webp)](https://nextjstemplates.com/templates/saas-starter-startup)

Startup Pro - Expertly crafted for fully-functional, high-performing SaaS startup websites. Comes with with Authentication, Database, Blog, and all the essential integrations necessary for SaaS business sites.


- [🚀 View Free Demo](https://startup.nextjstemplates.com/)

- [🚀 View Pro Demo](https://startup-pro.nextjstemplates.com/)

- [📦 Download](https://nextjstemplates.com/templates/startup)

- [🔥 Get Pro](https://nextjstemplates.com/templates/saas-starter-startup)

- [🔌 Documentation](https://nextjstemplates.com/docs)

### ⚡ Deploy Now

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNextJSTemplates%2Fstartup-nextjs)

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/NextJSTemplates/startup-nextjs)

### 🔐 Supabase Setup

This project uses Supabase for authentication with a Node.js backend API. To get started:

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com) and create a new project
   - Wait for the project to be fully set up

2. **Get Your Credentials**
   - In your Supabase project dashboard, go to Settings > API
   - Copy your Project URL and anon/public key
   - Copy your Service Role Key (for server-side operations)

3. **Configure Environment Variables**
   - Create a `.env.local` file in the root directory
   - Add the following variables:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
     ```
   - **Important**: Never expose the Service Role Key in client-side code!

4. **Configure OAuth Providers (Optional)**
   - In Supabase dashboard, go to Authentication > Providers
   - Enable Google and/or GitHub providers
   - Add your OAuth app credentials
   - Add redirect URL: `http://localhost:3000/auth/callback` (for local development)
   - Add redirect URL: `https://yourdomain.com/auth/callback` (for production)

5. **Configure Email (For Password Reset)**
   - In Supabase dashboard, go to Authentication > Email Templates
   - Configure your email settings or use Supabase's default email service

6. **Run the Project**
   ```bash
   npm install
   npm run dev
   ```

### 🚀 Backend API Structure

The project includes a Node.js backend using Next.js API routes:

- **POST** `/api/auth/signup` - User registration
- **POST** `/api/auth/signin` - User login
- **POST** `/api/auth/signout` - User logout
- **GET** `/api/auth/user` - Get current user
- **GET** `/api/auth/oauth?provider=google|github` - OAuth authentication
- **POST** `/api/auth/reset-password` - Request password reset
- **POST** `/api/auth/update-password` - Update password

All authentication operations go through the backend API for better security and control.

### 📦 Vercel Deployment

This project is ready for Vercel deployment with both frontend and backend in one structure:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for Vercel"
   git push
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY`
   - Deploy!

3. **Update Supabase Redirect URLs**
   - After deployment, update your Supabase redirect URLs to include your Vercel domain
   - Add: `https://your-app.vercel.app/auth/callback`
   - Add: `https://your-app.vercel.app/reset-password`

The authentication features include:
- Email/Password signup and signin
- OAuth signin with Google and GitHub
- Password reset functionality
- Protected routes
- User session management
- Server-side API routes for secure operations

### 📄 License
Startup is 100% free and open-source, feel free to use with your personal and commercial projects.

### 💜 Support
If you like the template, please star this repository to inspire the team to create more stuff like this and reach more users like you!

### ✨ Explore and Download - Free [Next.js Templates](https://nextjstemplates.com)

### Update Log

**10 April 2025**
- Fix peer deps issue with Next.js 15
- Upgrade to tailwind v4
- Refactored blog cards for handling edge cases(text ellipsis on bio, keeping author details at the bottom etc.)
- Re-wrote blog details page with icons separation, fallback author image and better markup.
- Fixed duplicate key errors on homepage.
- Separated icons on theme-switcher button, and refactored scroll-to-top button.

**29 Jan 2025**
- Upgraded to Next.js 15

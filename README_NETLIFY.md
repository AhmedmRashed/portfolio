Deploying this Vite + React site to Netlify

Option A — Connect your Git repository (recommended)
1. Push your project to GitHub/GitLab/Bitbucket.
2. Go to https://app.netlify.com/ and click "New site from Git".
3. Choose your repo and branch.
4. Set build command: `npm run build` and publish directory: `dist`.
5. Click deploy. Netlify will run the build and publish the `dist` folder.

Option B — Deploy with Netlify CLI (one-off or CI)
1. Install Netlify CLI (only needed locally):

   npm install -g netlify-cli

2. Build the site locally:

   npm install
   npm run build

3. Deploy the `dist` folder (interactive):

   netlify deploy --dir=dist

   To create a production deploy (non-interactive) after linking the site once:

   netlify deploy --prod --dir=dist

Notes and tips
- SPA routing: `public/_redirects` is already added to route all requests to `index.html`.
- The `public/resume.pdf` file is included in the published site; replace it with your real resume (same filename) before deploying.
- If you have environment variables, set them in the Netlify UI under Site settings > Build & deploy > Environment.
- If the build fails on Netlify, open the deploy logs in the Netlify UI and paste the error here — I can help troubleshoot.

If you want, I can also:
- Add a GitHub Action to automatically deploy on push,
- Help you link the repo to Netlify and configure environment variables,
- Run a test deploy if you provide Netlify site auth (not recommended here).
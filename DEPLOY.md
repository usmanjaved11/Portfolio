# Deploying on Vercel

This export is preconfigured for Vercel (`nitro: { preset: "vercel" }` in `vite.config.ts` + `vercel.json`).

## Steps

1. Unzip this folder, then push it to your GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/usmanjaved11/Portfolio.git
   git push -u origin main
   ```
   (If the repo already has content, `git pull origin main --allow-unrelated-histories` first, or force-push.)

2. On Vercel: **New Project → Import** the `Portfolio` repo.
   - Framework Preset: **Other** (auto-detected)
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output Directory: leave default (Nitro's Vercel preset emits `.vercel/output` automatically)

3. Add these Environment Variables in Vercel (Project → Settings → Environment Variables):
   ```
   VITE_SUPABASE_URL=https://c--da345768-7749-4bd1-b382-6882ec7c2442-prod.lovable.cloud
   VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_Q8qhkvVCFlxBOpOOUzjIYA_B3d83Omu
   VITE_SUPABASE_PROJECT_ID=vuzjgeslyjkqulkqudqw
   ```
   These point the contact form at the same Lovable Cloud database the preview uses, so submitted messages keep landing in the same place.

4. Deploy. The contact form will read/write the same backend as the Lovable preview.

> Note: These are publishable (client-safe) keys, not secrets — safe to ship in the browser.

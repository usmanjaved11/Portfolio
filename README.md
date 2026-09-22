# M Usman — Personal Portfolio

A minimal, elegant one-page portfolio: about/hero, education, work experience, projects, skills, contact form and footer. The contact form is fully working — submissions are validated in the browser, validated again on the server, and stored in the database.

## Technologies

- React 19 + TypeScript
- TanStack Start (routing + server functions) with Vite
- Tailwind CSS v4 (design tokens in `src/styles.css`)
- Lovable Cloud (Postgres database) for storing contact messages
- `react-icons` for skill logos, `lucide-react` for UI icons

## Folder structure

```
src/
  assets/                     profile + project images
  components/portfolio/       Navbar, Hero, Education, Experience, Projects,
                              ProjectCard, Skills, SkillItem, Contact,
                              ContactForm, Footer
  data/portfolio.ts           ALL portfolio content (single source of truth)
  lib/contact.functions.ts    server-side contact endpoint + validation
  routes/index.tsx            the page itself
  styles.css                  colors, fonts, radii, shared utilities
public/
  cv/Muhammad_Usman_CV.pdf    downloadable CV
```

## Running it

```
npm install
npm run dev      # development
npm run build    # production build
```

No `.env` setup is needed: the database connection is provisioned automatically by Lovable Cloud.

## Updating the content

Everything lives in **`src/data/portfolio.ts`**. No component needs editing.

| What to change | Where |
| --- | --- |
| Name, brand, role, bio, email, phone, location | `profile` |
| Profile picture | replace `src/assets/profile-placeholder.jpg` (or point `profile.image` at a new import) |
| CV | replace `public/cv/Muhammad_Usman_CV.pdf`, or change `profile.cvUrl` |
| Education entries | `education` array |
| Work experience entries | `experience` array |
| Projects (title, tags, description, image, GitHub link) | `projects` array |
| Project images | `src/assets/coffee-shop-management.png`, `atm-management.png`, `note-taking-app.png` |
| Technical skills and logos | `skills` array (icons from `react-icons`) |
| Soft skills / languages / hobbies | `softSkills`, `languages`, `hobbies` arrays |
| Social links | `socialLinks` array |
| Navigation items | `navLinks` array |

## How the contact form works

1. The browser validates name, email and message and blocks the request if anything is missing or malformed.
2. Valid data is sent to the server function in `src/lib/contact.functions.ts`.
3. The server re-validates with Zod (length limits, email format, whitespace-only rejected), applies a simple rate limit, and inserts the row into the `contact_messages` table.
4. The response is always `{ success, message }`. Technical errors are logged on the server only; the visitor sees a generic "Something went wrong. Please try again later."
5. While sending, the button is disabled and shows "Sending…", preventing duplicate submissions. On success the form clears and shows "Message sent successfully!".

Stored messages are private: the site can add messages but cannot read them back.

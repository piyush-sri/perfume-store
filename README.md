# Perfume Store website (Basti): setup

Files: `index.html` (public site), `admin.html` (your panel), `firebase-config.js`, `style.css`.

The pages are static files. The data (companies, offers, coupons) lives in Firebase Firestore (free plan is plenty), so what you save in the admin panel shows on the website for every visitor.

## Step 1: Create the Firebase project
1. Go to console.firebase.google.com, click **Add project**, name it `perfume-store`.
2. **Build → Firestore Database → Create database** (production mode, pick `asia-south1` Mumbai).
3. **Build → Authentication → Get started → Email/Password → Enable**.
4. In Authentication → **Users → Add user**: enter your email and a strong password. This is your admin login.

## Step 2: Connect the code
1. Project settings (gear icon) → **Your apps → Web (`</>`)** → register app.
2. Copy the `firebaseConfig` values into `firebase-config.js`.
3. In the same file, edit `SHOP` (address, phone, WhatsApp number).

## Step 3: Security rules (important)
Firestore → **Rules** → replace with the following, using YOUR admin email, then **Publish**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null
                   && request.auth.token.email == "your-admin-email@gmail.com";
    }
  }
}
```

Anyone can read (so visitors see your content); only your email can add, edit or delete.

## Step 4: Put it online (free)
- **Firebase Hosting**: `npm i -g firebase-tools`, `firebase login`, `firebase init hosting` (public folder = this folder), `firebase deploy`.
- Or drag the folder onto **Netlify Drop** (app.netlify.com/drop), or use GitHub Pages / Cloudflare Pages.
- Then in Firebase → Authentication → Settings → **Authorized domains**, add your site's domain.

To test locally, run `python3 -m http.server 8000` in this folder and open `http://localhost:8000` (ES modules do not work from `file://`).

## Using the admin panel
Open `yourdomain.com/admin.html`, log in, and use the tabs:
- **Companies**: add name, logo link, description.
- **Offers** and **Coupons**: add, edit, delete. If you set "Valid till", the entry hides itself from the website after that date.

## Local visibility tips
- Create a **Google Business Profile** for the shop and add the website link.
- Replace the placeholder address in `SHOP` and the `<title>`/description in `index.html` with your exact locality in Basti.
- Add your website link to your WhatsApp Business profile.

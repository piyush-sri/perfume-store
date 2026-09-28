// Paste YOUR Firebase web-app config here (see README.md, Step 2)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "copy this from your screen",
  authDomain: "perfume-store-aafbe.firebaseapp.com",
  projectId: "perfume-store-aafbe",
  appId: "1:781198623883:web:03e9ded3d57bbeaa59808e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Shop details shown on the website — edit freely
export const SHOP = {
  name: "Perfume Store",
  tagline: "Wholesale cosmetics & fragrances, Basti",
  address: "Your shop address, Basti, Uttar Pradesh",
  phone: "+91 90000 00000",
  whatsapp: "919000000000", // country code + number, no + or spaces
};

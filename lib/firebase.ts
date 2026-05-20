import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
  authDomain: "vai-777.firebaseapp.com",
  projectId: "vai-777",
  storageBucket: "vai-777.firebasestorage.app",
  messagingSenderId: "199196361489",
  appId: "1:199196361489:web:9b48bb987f7c5a104382b0",
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
export const auth = getAuth(app)

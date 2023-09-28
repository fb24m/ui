import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyAF11X8psRyUd-y97wnYpvqmj_i3Rwmk6Q",
	authDomain: "fb24m-6c83c.firebaseapp.com",
	projectId: "fb24m-6c83c",
	storageBucket: "fb24m-6c83c.appspot.com",
	messagingSenderId: "779116236174",
	appId: "1:779116236174:web:7ee5e46d726d55f45128df",
	measurementId: "G-CMV1ZF0R91"
};

export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);

auth.languageCode = 'ru';

export const database = getDatabase(app);
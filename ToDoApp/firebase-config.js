import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA9q55xP7w3xh7wGRNq5Jf4s63BFn1ZIII",
    authDomain: "todoapp-a90a6.firebaseapp.com",
    databaseURL: "https://todoapp-a90a6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todoapp-a90a6",
    storageBucket: "todoapp-a90a6.appspot.com",
    messagingSenderId: "155289082259",
    appId: "1:155289082259:web:715577515bd9667610b066",
    measurementId: "G-ER63874WFY"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
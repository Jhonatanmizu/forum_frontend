import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUjHrWOs2rCdGzgcpv4jxk2_V0XWCG_sU",
  authDomain: "forum-de-tec-ix.firebaseapp.com",
  projectId: "forum-de-tec-ix",
  storageBucket: "forum-de-tec-ix.appspot.com",
  messagingSenderId: "921241335649",
  appId: "1:921241335649:web:8abc05703cf27fecb67720",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export { firebaseApp, firestore };

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCQRzjT_xyvXudCKelw5vD2Cv-LJD6UrhE",
  authDomain: "react-firebase-millyseek.firebaseapp.com",
  projectId: "react-firebase-millyseek",
  storageBucket: "react-firebase-millyseek.appspot.com",
  messagingSenderId: "741908456135",
  appId: "1:741908456135:web:149bf2eeb237c7277854e2",
  measurementId: "G-BM7MH5ECGM",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, "users");
    getDocs(usersCollectionRef).then((querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default App;

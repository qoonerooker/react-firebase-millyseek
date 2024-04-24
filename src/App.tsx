import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

type Users = {
  id: string;
  name: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, "users");
    getDocs(usersCollectionRef).then((querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          name: doc.data().name,
          email: doc.data().email,
        }))
      );
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} [{user.email}]
        </div>
      ))}
    </div>
  );
}

export default App;

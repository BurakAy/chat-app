import "../styles/SidebarSearchbar.css";
import { useContext, useState } from "react";
import {
  collection,
  getFirestore,
  query,
  where,
  getDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";

const SidebarSearchbar = () => {
  const [userSearch, setUserSearch] = useState("");
  const [user, setUser] = useState();
  const [err, setErr] = useState(false);
  const db = getFirestore();
  const currentUser = useContext(AuthContext);

  const handleUserSearch = (event) => {
    setUserSearch(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key == "Enter") {
      if (userSearch == "" && user) {
        setUser();
        return;
      }
      queryUser();
    }
  };

  const queryUser = async () => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("displayName", "==", userSearch));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setErr(true);
    }
  };

  const handleChatSelect = async () => {
    try {
      const combinedId =
        currentUser.uid > user.uid
          ? currentUser.uid + user.uid
          : user.uid + currentUser.uid;
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [`${combinedId}.userInfo`]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [`${combinedId}.userInfo`]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
    }

    setUser();
    setUserSearch("");
  };

  return (
    <div className="searchbar--container">
      <div className="searchbar--wrapper">
        <div className="searchbar--form">
          <input
            className="finduser"
            name="finduser"
            type="text"
            value={userSearch}
            onKeyDown={handleSearch}
            onChange={handleUserSearch}
            placeholder="Find a user"
          />
        </div>
        {user && (
          <div className="searchbar--result" onClick={handleChatSelect}>
            <img src={user.photoURL} />
            <p>{user.displayName}</p>
          </div>
        )}
        {err && (
          <div className="searchbar--result">
            <p>User not found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarSearchbar;

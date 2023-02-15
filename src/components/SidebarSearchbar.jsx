import "../styles/SidebarSearchbar.css";
import { useState } from "react";
import {
  collection,
  getFirestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const SidebarSearchbar = () => {
  const [userSearch, setUserSearch] = useState("");
  const [user, setUser] = useState();
  const [err, setErr] = useState(false);
  const db = getFirestore();

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
        <div className="searchbar--result">
          {user && (
            <>
              <img src={user.photoURL} />
              <p>{user.displayName}</p>
            </>
          )}
          {err && (
            <>
              <p>User not found</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarSearchbar;

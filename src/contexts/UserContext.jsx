import { createContext, useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { database } from "../firebaseConfig";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [createClick, setCreateClick] = useState(false);
  const [editClick, setEditClick] = useState(false);
  const [deleteClick, setDeleteClick] = useState(false);
  const [detailsClick, setDetailsClick] = useState(false);

  useEffect(() => {
    const q = query(collection(database, "files"));
    onSnapshot(q, (snapshot) => {
      setUsers(
        snapshot.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
      setIsLoading(true);
    });
  }, []);

  const removeClickHandler = () => {
    setCreateClick(false);
    setDeleteClick(false);
    setDetailsClick(false);
    setEditClick(false);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        isLoading,
        createClick,
        setCreateClick,
        editClick,
        setEditClick,
        deleteClick,
        setDeleteClick,
        detailsClick,
        setDetailsClick,
        removeClickHandler
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

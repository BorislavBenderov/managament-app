import { createContext, useEffect, useState } from "react";
import { collection, onSnapshot, query } from 'firebase/firestore';
import { database } from "../firebaseConfig";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const q = query(collection(database, 'files'));
        onSnapshot(q, (snapshot) => {
            setUsers(snapshot.docs.map((item) => {
                return { ...item.data(), id: item.id }
            }));
            setIsLoading(true);
        });
    }, []);

    return (
        <UserContext.Provider value={{ users, isLoading }}>
            {children}
        </UserContext.Provider>
    );
}
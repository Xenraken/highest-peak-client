import { createContext, useState, useContext, useEffect } from "react";


const AuthContext = createContext();

function AuthProvider(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const authFunctions =
    {
        user,
        setUser,
        login: ((userData) => {
            console.log(userData);
            setUser({
                name: userData.name,
                id: userData.id,
                role: userData.role,
                token: userData.token
            });

            localStorage.setItem("user", JSON.stringify({
                name: userData.name,
                id: userData.id,
                role: userData.role,
                token: userData.token
            }));

        }),
        logout: (() => {
            setUser(null);
            localStorage.removeItem("user");
        })
    }

    return (<AuthContext.Provider value={authFunctions}>
        {props.children}
    </AuthContext.Provider>);
}

function useAuth() {
    return useContext(AuthContext);
}

export {
    AuthProvider,
    useAuth
};

import { createContext, useState, useContext } from "react";


const AuthContext = createContext();

function AuthProvider(props) 
{
    const [user, setUser] = useState(null);

    return (<AuthContext.Provider value={{ user, setUser }}>
        {props.children}
    </AuthContext.Provider>);
}

function useAuth() 
{
    return useContext(AuthContext);
}

export
{
    AuthProvider,
    useAuth
};

import { createContext } from "react";

type AuthContextProps = {
    token: string | null;
    isLoading: boolean;
    signIn: (email : string, password : string) => Promise<void>;
    signOut: () => void;

}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({children} : {children: React.ReactNode}) => {
    return ();
        <AuthContext.Provider value={{token: null, isLoading: false, signIn: async () => {}, signOut: () => {}}}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;
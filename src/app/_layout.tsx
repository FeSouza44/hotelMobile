/*Define o fluxe de navegação*/
import { Slot, Stack } from "expo-router";
import AuthProvider from "../context/AuthContext";
 
const RootLayout= () => {
    return( 
        <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}>
                
        </AuthProvider>
     )

}

export default RootLayout;

/*Definir fluxo de navegação entre as telas disponiveis em "Tab Navigator:
-Home
-Reserves
-Perfil
"*/

import { Tabs } from "expo-router";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const TabsLayout = () => {
    return(
            <Tabs screenOptions={{tabBarActiveTintColor: "#5C5B5B"}}>

                <Tabs.Screen name="index" options={{ title: 'Explorer', tabBarIcon: ({}) => <FontAwesome5 name="search" size={24} color="black" />
                }}
                />

                <Tabs.Screen 
                    name="index" options={{title: 'Reservations', tabBarIcon: ({}) => <MaterialIcons name="card-travel" size={24} color="black" />
                }}
                />
            </Tabs>
    )
}

export default TabsLayout;


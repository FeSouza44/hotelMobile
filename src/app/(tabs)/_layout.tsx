/*Definir fluxo de navegação entre as telas disponiveis em "Tab Navigator:
-Home
-Reserves
-Perfil
"*/
import { Tabs } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const TabLayout  = () => {

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#871001', headerShown: false, tabBarStyle: {justifyContent: "center", alignItems:"center", height:60} } } >
      <Tabs.Screen
        name="explorer"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome5 name="search" size={24} color={color} />,
        }}
      />
       <Tabs.Screen
        name="reservation"
        options={{
          title: 'Reservation',
          tabBarIcon: ({ color }) => <FontAwesome5 name="search" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: 'MyAccount',
          tabBarIcon: ({ color }) => <FontAwesome5 name="profile" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

export default TabLayout;


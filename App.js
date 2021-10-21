// import { Provider } from 'react-redux';
// import store from "./src/Stores/Tabs/store";
import React from "react";
import { ImageBackground, View, SafeAreaView, Text } from "react-native";
import 'react-native-gesture-handler';
import Dashboard from "./src/screens/Dashboard";
import Exchange from "./src/screens/Exchange";
import Stats from "./src/screens/Stats";
import Setting from "./src/screens/Setting";
import Login from "./src/Login/SignUpAuth/Login";
import SignUp from "./src/Login/SignUpAuth/SignUp";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icons from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();


function App() {
  function Tabs() {
    return (
      <Tab.Navigator style = {{backgroundColor : '#181818'}}
        initialRouteName="Dashboard"
        tabBarPosition='bottom'
        screenOptions={{
          tabBarActiveTintColor: '#e5a800',
          tabBarLabelStyle: { fontSize: 10, },
          tabBarStyle: {
            backgroundColor: '#40373a',
            paddingTop: 10,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,

          },
        }}

      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons style={{}}
                focused={focused}
                name={'home'}
                color={color}
                size={23}
              />
            ),

          }}


        />
        <Tab.Screen
          name="Exchange"
          component={Exchange}
          options={{


            tabBarIcon: ({ color, focused }) => (
              <Fontisto style={{}}
                name={'arrow-swap'}
                color={color}

                size={23}
              />
            ),
            tabBarLabel: 'Updates'
          }}
        />
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Entypo style={{}}
                name={'bar-graph'}
                color={color}
                size={23}
              />
            )
          }}
        />
        <Tab.Screen
          name='Setting'
          component={Setting}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                style={{}}
                name={'settings-sharp'}
                color={color}
                size={23}
              />
            )
          }}
        />
      </Tab.Navigator>
    )

  }

  return (


    <SafeAreaView style={{ flex: 1, backgroundColor: '#181818' }}>


        <NavigationContainer>
          <Stack.Navigator screenOptions = {{
            headerShown : false
          }}>
            {/* <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Tabs" component={Tabs} /> */}
            <Stack.Screen name="Stats" component={Stats} />







          </Stack.Navigator>
        </NavigationContainer>



    </SafeAreaView>






  )

}

export default App;
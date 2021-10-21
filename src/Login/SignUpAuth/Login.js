import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { login } from "../../Stores/Tabs/signupAction";
import {  useDispatch} from "react-redux";

function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();

    const SignIn = () => {
        let user = {
            email,
            password
        }
        dispatch(login(user))
        .then(()=>{
            navigation.navigate('Tabs')
        }).catch((err)=>{
            alert(err)
        })
      
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#181818' }}>

            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#181818' }}>

                <View style={{ backgroundColor: '#d2a56e', width: '100%', borderBottomLeftRadius: 80, padding: 10 }}>
                    <View style={{ height: 180, justifyContent: "center", alignItems: "center" }}>
                        <View ><FontAwesome5 name='user-alt' style={{ color: 'white', fontSize: 90 }} /></View>
                    </View>
                    <View style={{ justifyContent: "flex-end", marginRight: 5 }}>
                        <Text style={{ textAlign: "right", color: 'white', fontSize: 20, fontWeight: "bold", paddingBottom: 10 }}>
                            Login
                        </Text>
                    </View>
                </View>

                <View style={{ width: '80%', marginTop: 50, backgroundColor: 'white', flexDirection: "row", alignItems: "center", height: 60, borderRadius: 25 }}>
                    <View>
                        <MaterialCommunityIcons name="email" size={25} style={{ color: '#d2a56e', marginRight: 10, marginLeft: 20, borderWidth: 1, borderRightColor: '#e5e5e5', borderLeftColor: 'white', borderBottomColor: 'white', borderTopColor: 'white', paddingRight: 10, paddingVertical: 5 }} />
                    </View>
                    <View style={{ width: '70%' }}>
                        <TextInput onChangeText={(text) => setEmail(text)} keyboardType='email-address' style={{ fontSize: 15 }} placeholder='Email' />
                    </View>
                </View>

                <View style={{ width: '80%', marginTop: 10, backgroundColor: 'white', flexDirection: "row", alignItems: "center", height: 60, borderRadius: 25 }}>
                    <View>
                        <MaterialCommunityIcons name="key" size={25} style={{ color: '#d2a56e', marginRight: 10, marginLeft: 20, borderWidth: 1, borderRightColor: '#e5e5e5', borderLeftColor: 'white', borderBottomColor: 'white', borderTopColor: 'white', paddingRight: 10, paddingVertical: 5 }} />
                    </View>
                    <View style={{ width: '70%' }}>
                        <TextInput onChangeText={(text) => setPassword(text)} style={{ fontSize: 15 }} placeholder='Password' />
                    </View>
                </View>
                {/* <View style={{ borderWidth: 1, borderColor: 'red', width: '80%', marginBottom: 20, backgroundColor: 'white' }}>
                <TextInput style={{ fontSize: 15, padding: 15, width: '80%' }} placeholder='Enter Password' />
            </View> */}


                <View style={{ width: "80%", marginTop: 30 }}>
                    <TouchableOpacity onPress={SignIn} style={{
                        backgroundColor: '#d2a56e', borderRadius: 25, padding: 10, justifyContent: 'center'
                    }}><Text style={{ fontSize: 20, textAlign: 'center', padding: 10, color: 'white', }}>Login</Text></TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: "white" }}>Do You Have Account ?</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}><Text style={{ color: 'skyblue', padding: 10 }}>SignUp Now</Text></TouchableOpacity>
                    </View>
                </View>




            </View>
        </ScrollView>

    )
}

export default Login;
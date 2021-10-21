import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entyp from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import { useSelector, useDispatch } from 'react-redux';


const Setting = ({navigation}) => {

    let user = useSelector(userState => userState.signupReducer.user)
    console.log(user)
    const signOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#181818' }}>


            <View>
                <Text style={{ color: 'white' }}></Text>
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 25, color: 'white', fontWeight: 'bold', margin: 19 }}>Setting</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View>
                        {/* Empty  */}
                    </View>

                    <View style={{ flexDirection: 'row', height: 50, alignItems: 'center', justifyContent: 'center' }}>



                        <View style={{ backgroundColor: '#d2a56e', padding: 5, borderRadius: 20, }}>
                            <Ionicons name='scan' size={25} style={{ color: 'white' }} />
                        </View>

                        <View style={{ backgroundColor: '#d2a56e', padding: 6, borderRadius: 20, marginHorizontal: 8 }}>
                            <Ionicons name='notifications' size={25} style={{ color: 'white' }} />
                        </View>


                    </View>

                </View>

                <View style={{ alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', backgroundColor: '#e5a800', borderRadius: 20 }}>
                        <Entypo name='user' size={70} style={{ color: 'white', padding: 20 }} />
                    </View>

                    <View>
                        {/* <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 20 }}>
                            {user.username}
                        </Text> */}
                    </View>

                    <View style={{ height: 40, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                        <View>
                            <Text style={{ color: 'white', fontSize: 14, opacity: 0.5 }}>
                                ID: 7856375
                            </Text>
                        </View>
                        <View>
                            <MaterialIcons name='verified-user' size={15} style={{ color: '#e5a800', paddingLeft: 5 }} />
                        </View>
                    </View>
                </View>

                {/* Cards Payments */}

                <View>

                    <View style={{ paddingVertical: 10, marginHorizontal: 16, marginBottom: 10 }}>
                        <View style={{ marginBottom: 10, opacity: 0.5 }}>
                            <Text style={{ color: 'white' }}>Cards</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>


                            <View style={{ backgroundColor: '#d2a56e', width: 30, borderRadius: 80, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 20, color: 'white', paddingBottom: 3 }}>+</Text>
                            </View>

                            <View style={{ borderRadius: 80, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='cc-mastercard' size={40} style={{ color: '#d2a56e' }} />
                            </View>

                            <View style={{ borderRadius: 80, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='cc-visa' size={40} style={{ color: '#d2a56e' }} />
                            </View>

                            <View style={{ borderRadius: 80, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='cc-paypal' size={40} style={{ color: '#d2a56e' }} />
                            </View>

                            <View style={{ borderRadius: 80, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='cc-mastercard' size={40} style={{ color: '#d2a56e' }} />
                            </View>

                        </View>
                    </View>

                </View>

                {/* manage account , security ,  */}

                <View>

                    {/* manage account */}

                    <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'red', padding: 10, marginHorizontal: 15, borderRadius: 10, marginBottom: 10 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: 40, width: 40, backgroundColor: '#d2a56e', borderRadius: 50 }}>
                            <Icon name='tasks' size={20} style={{ color: '#37373b' }} />
                        </View>
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Manage Account</Text>
                        </View>
                    </View>

                    {/* Notification */}

                    <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'red', padding: 10, marginHorizontal: 15, borderRadius: 10, marginBottom: 10 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: 40, width: 40, backgroundColor: '#d2a56e', borderRadius: 50 }}>
                            <Ionicons name='notifications' size={20} style={{ color: '#37373b' }} />
                        </View>
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Notifications</Text>
                        </View>
                    </View>

                    {/* Messages */}

                    <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'red', padding: 10, marginHorizontal: 15, borderRadius: 10, marginBottom: 10 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: 40, width: 40, backgroundColor: '#d2a56e', borderRadius: 50 }}>
                            <MaterialCommunityIcons name='android-messages' size={20} style={{ color: '#37373b' }} />
                        </View>
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Messages</Text>
                        </View>
                    </View>


                    {/* Security */}

                    <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'red', padding: 10, marginHorizontal: 15, borderRadius: 10, marginBottom: 10 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: 40, width: 40, backgroundColor: '#d2a56e', borderRadius: 50 }}>
                            <FontAwesome5 name='shield-alt' size={20} style={{ color: '#37373b' }} />
                        </View>
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Security</Text>
                        </View>
                    </View>


                    {/* Payment */}

                    <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'red', padding: 10, marginHorizontal: 15, borderRadius: 10, marginBottom: 10 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: 40, width: 40, backgroundColor: '#d2a56e', borderRadius: 50 }}>
                            <MaterialIcons name='payment' size={20} style={{ color: '#37373b' }} />
                        </View>
                        <View style={{ marginLeft: 30 }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Payments</Text>
                        </View>
                    </View>

                    {/* SignOut */}

                    <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'red', padding: 10, marginHorizontal: 15, borderRadius: 10, marginBottom: 10 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: 40, width: 40, backgroundColor: '#d2a56e', borderRadius: 50 }}>
                            <MaterialIcons name='payment' size={20} style={{ color: '#37373b' }} />
                        </View>
                        <View style={{ marginLeft: 30 }}>
                            <TouchableOpacity onPress={signOut}>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>Payments</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>



            </View>

        </ScrollView>

    )
}

export default Setting;
import { View, Text, ScrollView, Button, TouchableOpacity, ImageBackground, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getHoldings } from '../Stores/Tabs/marketAction';




const Dashboard = () => {

    let state = useSelector(state => state.markerReducer)
    


    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHoldings())
    }, [])


    let totalWallet = 12

    const cornFlowerBlue = 'gray';
    const red = '#f70000'
    const green = "#6faf04"
    return (

        <ScrollView style={{ flex: 1, backgroundColor: '#181818' }}>

            <View >

                <View style={{ padding: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 24, color: 'white', fontWeight: 'bold' }}>Dashboard</Text>
                </View>

                <View >

                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <View>
                            <Text style={{ fontSize: 34, color: '#e3a902', fontWeight: 'bold' }}>{totalWallet}</Text>
                        </View>

                        <View>
                            <Ionicons name='notifications' size={18} style={{ color: '#e3a902' }} />
                        </View>

                    </View>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#e3a902', fontWeight: 'bold' }}>Available Balance</Text>
                </View>
                {/* map  */}

                <View>
                    {state.myHoldings.map((e, i) => {

                        let priceColor = (e.price_change_percentage_7d_in_currency == 0)
                            ? cornFlowerBlue : (
                                e.price_change_percentage_7d_in_currency > 0
                            ) ?  green : red
                        return (

                            <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderWidth: 1, borderBottomColor: "#707070", height: 70, alignItems: 'center' }}>

                                <View style={{ flexDirection: 'row', height: 70, alignItems: 'center' }}>
                                    <View style={{ padding: 5, borderRadius: 30, marginRight: 10, height: 30, justifyContent: 'center', width: 30, alignItems: 'center' }}>
                                        <Image source={{ uri: e.image }} style={{ width: 23, height: 23 }} />
                                    </View>

                                    <View>
                                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>{e.id.charAt(0).toUpperCase() + e.id.slice(1)}</Text>
                                        <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 13 }}>Brought Via Visa Card</Text>
                                    </View>
                                </View>


                                <View>

                                    <Text style={{ color: priceColor, textAlign: 'right', fontWeight: 'bold', fontSize: 13 }}>{e.price_change_percentage_7d_in_currency.toFixed(10) }</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>

                                        <Text style={{color: 'white', opacity: 0.6, textAlign: 'right', fontWeight: 'bold', fontSize: 13, marginRight: 5 }}> +{` `, e.current_price}</Text>
                                        <Text style={{ color: 'white', opacity: 0.6, textAlign: 'right', fontWeight: 'bold', fontSize: 13 }}>USD</Text>

                                    </View>

                                </View>
                            </View>
                        )


                    }
                    )}

                </View>
            </View>
        </ScrollView>
    )
}

export default Dashboard;
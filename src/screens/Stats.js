import axios from "axios"
import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { VictoryLine, VictoryScatter } from "victory-native"


export default function App() {
    const [data, setData] = useState()
    const [coin, setCoin] = useState("bitcoin")
    const [period, setPeriod] = useState(30)


    useEffect(
        () => {
            getData()
        },
        [coin, period]
    )

    async function getData() {
        try {
            const response = await axios.get(
                `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${period}`
            )
            const formatData = response.data.prices.map(function (i) {
                return {
                    x: i[0],
                    y: i[1]
                }
            })
            setData(formatData)
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <View style={{ backgroundColor: '#181818', flex: 1 }}>
            <View style={styles.container}>


                <View style={{ padding: 20, marginBottom: 10 }}>
                    <Text style={{ textAlign: 'center', fontSize: 24, color: 'white', fontWeight: 'bold' }}>Stats</Text>
                </View>

                <View style={styles.coins}>
                    <Text
                        style={[styles.title, coin === "bitcoin"]}
                        onPress={() => setCoin("bitcoin")}
                    >
                        Bitcoin
                    </Text>
                    <Text
                        style={[styles.title, coin === "ethereum"]}
                        onPress={() => setCoin("ethereum")}
                    >
                        Ethereum
                    </Text>
                    <Text
                        style={[styles.title, coin === "neo"]}
                        onPress={() => setCoin("neo")}
                    >
                        neo
                    </Text>
                </View>
                <VictoryLine
                    style={{
                        data: {
                            stroke: "#5caf6b",
                            strokeWidth: 1,

                        }
                    }}
                    width={440}
                    height={200}
                    data={data}
                />
                


                <View style={styles.timeWrapper}>
                    <Text style={[styles.time, period === 1 ? styles.underline : null]} onPress={() => setPeriod(1)}>
                        D
                    </Text>
                    <Text style={[styles.time, period === 7 ? styles.underline : null]} onPress={() => setPeriod(7)}>
                        W
                    </Text>
                    <Text style={[styles.time, period === 30 ? styles.underline : null]} onPress={() => setPeriod(30)}>
                        M
                    </Text>
                    <Text style={[styles.time, period === 183 ? styles.underline : null]} onPress={() => setPeriod(183)}>
                        6M
                    </Text>
                    <Text style={[styles.time, period === 365 ? styles.underline : null]} onPress={() => setPeriod(365)}>
                        1Y
                    </Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 20,
        backgroundColor: "#3c3638",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
        color: 'white',

    },
    timeWrapper: {
        width: 300,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    coins: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        backgroundColor: '#d2a56e',
        borderRadius: 10,
        marginBottom: 30

    },
    time: {
        margin: 10,
        color: "white"
        , fontWeight: "bold",
        color: '#e5a800'

    },
    header: {

        top: 50,
        fontSize: 50,
        fontWeight: "bold",
    },
    underline: { textDecorationLine: "underline" }
})
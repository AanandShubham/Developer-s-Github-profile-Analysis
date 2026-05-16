import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const AnalysisChart = ({ chartDetails }: { chartDetails: any }) => {
    // console.log("ChartDetails : ", chartDetails)
    return (
        <View style={styles.container}>
            <Text style={{ width: "100%" }}>Language Used in Repo</Text>
            <View style={
                {
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    position: "relative",
                    width: "100%",
                    height: "100%",
                }
            }>
                <View style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    paddingVertical: 10,
                }}>
                    {/* Percentage */}
                    <Text>100% _________________________________________________</Text>
                    <Text>80%  _________________________________________________</Text>
                    <Text>60%  _________________________________________________</Text>
                    <Text>40%  _________________________________________________</Text>
                    <Text>20%  _________________________________________________</Text>
                </View>

                <View style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    flexDirection: "row",

                }}>
                    {/* Chart and language */}


                    <FlatList
                        contentContainerStyle={{ flexGrow: 1, alignItems: "flex-end", justifyContent: "flex-start", marginStart: "9%" }}
                        style={{ flex: 1 }}
                        data={chartDetails}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={
                                {
                                    height: `${item.percentage}%`,
                                    minHeight: "15%",
                                    minWidth: "20%",
                                    paddingHorizontal: 10,
                                    backgroundColor: `${item.languageColor}`,
                                    borderRadius: 5,
                                    borderTopEndRadius: "20%",
                                    borderTopStartRadius: "20%",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center"
                                }
                            }>
                                <Text style={{color:`${item.languageColor in ["black","Black"]?"white":"black"}`,paddingBottom:5}}>{item.language}</Text>
                            </View>
                        )}
                        horizontal
                        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                    />
                    {/* Chart */}

                </View>
            </View>
        </View>
    )
}

export default AnalysisChart


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "70%",
    }
})

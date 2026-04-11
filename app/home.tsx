import React from 'react'

import { StyleSheet, View, Text, Image, FlatList } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import useGitContext from './context/GitContext'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


// create language Analitics Chart and Repo Details Card 
// then make the ui design same as the figma design.

const HomePage = () => {

    const { user, totalForks, totalStars, repos } = useGitContext()
    // if (user != null) {
    //     // console.log("User Data HOme : ", JSON.stringify(user, null, 2))
    //     console.log("usranem : ", user.name)
    //     console.log("profile Url : ", user.avatar_url)
    //     console.log("url : ", user.url)

    // }
    // else
    //     console.log("User Data Unavailable")
    
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaProvider>
                <View style={styles.container}>
                    <LinearGradient
                        colors={["#e1e18d", "#73f3"]}
                        start={{ x: 0.2, y: 0 }}
                        end={{ x: 0.8, y: 1 }}
                        style={styles.page}
                    >
                        {/* <View style={styles.page}> */}
                        {/* // header */}
                        <View style={styles.header}>
                            <View style={styles.headerButtons}>
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Profile</Text>
                            </View>
                            <View style={styles.headerButtons}>
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Hire Me</Text>
                            </View>

                        </View>

                        {/* // profile details */}
                        <View style={styles.profileDetails}>
                            <View style={
                                {
                                    width: "33%",
                                    height: "100%",
                                    borderRadius: 15,
                                    backgroundColor: "#abab6d49",
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                }
                            }>
                                {/* Profile Photo */}
                                <Image
                                    style={{ width: "99%", height: "99%", borderRadius: 15 }}
                                    source={{ uri: user?.avatar_url }}
                                />
                            </View>

                            <View style={{
                                width: "65%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "flex-start",
                                backgroundColor: "#abab6d49",
                                borderRadius: 15,
                                padding: 10,
                                gap: 5,
                            }}>
                                {/* name and other details */}
                                <Text>{user?.name}</Text>
                                <Text>{user?.email || user?.blog}</Text>
                                <Text>{user?.location}</Text>
                                <Text>{user?.bio}</Text>
                            </View>
                        </View>
                        {/* // follower */}
                        <View style={styles.followers}>
                            <View style={{
                                width: "32%",
                                height: "100%",
                                borderRadius: 15,
                                backgroundColor: "#abab6d49",
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                            }}>
                                <Text>{user?.followers}</Text>
                                <Text>followers</Text>
                            </View>

                            <View style={{
                                width: "32%",
                                height: "100%",
                                borderRadius: 15,
                                backgroundColor: "#abab6d49",
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                            }}>
                                <Text>{user?.following}</Text>
                                <Text>following</Text>
                            </View>

                            <View style={{
                                width: "32%",
                                height: "100%",
                                borderRadius: 15,
                                backgroundColor: "#abab6d49",
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                            }}>
                                <Text>{user?.public_repos}</Text>
                                <Text>repositories</Text>
                            </View>

                        </View>
                        {/* // social links */}
                        <View style={styles.socialLinks}>
                            <Text style={
                                {
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    width: "auto",
                                    backgroundColor: "#d4d46ef8",
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                    borderRadius: 10,
                                }
                            }>Social Links</Text>
                            <View style={{
                                width: "100%",
                                height: "55%",
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                flexDirection: "row",
                                backgroundColor: "#cfcf86",
                                borderRadius: 15,
                                // paddingHorizontal: 10,
                                // paddingVertical: 5,
                            }}>
                                <Text style={[styles.textIllusion, { width: "15%", borderRadius: 50 }]}>0</Text>
                                <Text style={[styles.textIllusion, { width: "15%", borderRadius: 50 }]}>0</Text>
                                <Text style={[styles.textIllusion, { width: "15%", borderRadius: 50 }]}>0</Text>
                                <Text style={[styles.textIllusion, { width: "15%", borderRadius: 50 }]}>0</Text>
                                <Text style={[styles.textIllusion, { width: "15%", borderRadius: 50 }]}>0</Text>

                            </View>
                        </View>

                        {/* forks and stars */}
                        <View style={styles.forksAndStars}>
                            <View>
                                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Total Forks</Text>
                                <Text>{totalForks}</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Total Stars</Text>
                                <Text>{totalStars}</Text>
                            </View>

                        </View>

                        {/* // repository details */}
                        <View style={styles.repositoryDetails}>
                            <Text style={
                                {
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    width: "auto",
                                    backgroundColor: "#d4d46ef8",
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                    borderRadius: 10,
                                }}>Repositories</Text>
                            <View style={{
                                width: "100%",
                                height: "80%",
                                display: "flex",
                                justifyContent: "space-between",
                                gap: 10,
                            }}>
                                <FlatList
                                    data={repos}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={({ item }) => (
                                        <View style={{
                                            width: "100%",
                                            height: 50,
                                            backgroundColor: "#d9d95eeb",
                                            borderRadius: 10,
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            flexDirection: "row",
                                            paddingHorizontal: 10,
                                        }}>
                                            <Text>{item.name}</Text>
                                            <Text>{item.stargazers_count} Stars</Text>
                                            {/* <Text>{item.forks_count} Forks</Text> */}
                                        </View>
                                    )}
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                                    ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
                                />
                            </View>
                        </View>
                        {/* // analytics */}
                        <View style={styles.analytics}>
                            <View style={{
                                width: "100%",
                                height: "20%",
                                borderRadius: 15,
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                flexDirection: "row",
                                gap: 20,
                            }}>
                                <Text style={[styles.textIllusion, { width: "30%" }]}>TExt</Text>
                                <Text style={[styles.textIllusion, { width: "30%", backgroundColor: "#63634252" }]}>TExt2</Text>
                            </View>
                            <View style={{
                                width: "100%",
                                height: "80%",
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "flex-end",
                                flexDirection: "row",
                            }}>
                                <Text style={[styles.textIllusion, { width: "15%", height: "90%",backgroundColor: "#63634252" }]}>000</Text>
                                <Text style={[styles.textIllusion, { width: "15%", height: "70%",backgroundColor: "#63634252" }]}>000</Text>
                                <Text style={[styles.textIllusion, { width: "15%", height: "53%",backgroundColor: "#63634252" }]}>000</Text>
                                <Text style={[styles.textIllusion, { width: "15%", height: "60%",backgroundColor: "#63634252" }]}>000</Text>
                                <Text style={[styles.textIllusion, { width: "15%", height: "80%",backgroundColor: "#63634252" }]}>000</Text>

                            </View>
                        </View>
                        {/* </View> */}
                    </LinearGradient>
                </View>
            </SafeAreaProvider>
        </SafeAreaView>

    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#6e7118a3",
    },
    page: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    header: {
        width: "100%",
        height: "5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    profileDetails: {
        width: "100%",
        height: "20%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        // paddingVertical: 5,
    },
    followers: {
        width: "100%",
        height: "8%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    socialLinks: {
        width: "100%",
        height: "12%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        // backgroundColor: "#abab6d49",
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        // marginVertical: 5,
    },
    forksAndStars: {
        width: "100%",
        height: "8%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#d9d95eeb",
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    repositoryDetails: {
        width: "100%",
        height: "25%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: "#abab6d49",
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        // marginVertical: 5,
    },
    analytics: {
        width: "100%",
        height: "23%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#abab6d49",
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        // marginVertical: 5,
    },
    headerButtons: {
        width: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#abab6d",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        // padding: 10,
    },
    textIllusion: {
        fontWeight: "bold",
        fontSize: 20,
        width: "100%",
        borderRadius: 10,
        // backgroundColor: "#6c6c4097",
    },

})


  // const languages = {
    //     Java: 15493,
    //     HTML: 10507,
    //     Kotlin: 7740
    // }

    // const total = Object.values(languages).reduce((sum, val) => sum + val, 0)

    // const percentages = Object.entries(languages).map(([lang, value]) => ({
    //     language: lang,
    //     percentage: ((value / total) * 100).toFixed(2)
    // }))

    // console.log(percentages)


// const languageColors: Record<string, string> = {
//   Java: "#b07219",
//   HTML: "#e34c26",
//   CSS: "#563d7c",
//   JavaScript: "#f1e05a",
//   TypeScript: "#3178c6",
//   Kotlin: "#A97BFF",
//   Python: "#3572A5",
//   C: "#555555",
//   "C++": "#f34b7d",
//   CSharp: "#178600",
//   Go: "#00ADD8",
//   Rust: "#dea584",
//   Swift: "#ffac45",
//   Dart: "#00B4AB",
//   Shell: "#89e051",
// }

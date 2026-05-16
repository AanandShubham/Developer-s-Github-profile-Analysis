import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, FlatList, Pressable, BackHandler } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import useGitContext from './context/GitContext'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import AnalysisChart from './components/AnalysisChart'
import useRepoDetails from './hooks/useRepoDetails'
import getLanguagePercentAndColor from './utils/getLanguagePercentAndColor'
import RepoDetailsChard from './components/RepoDetailsChard';
import { useFocusEffect, useRouter } from 'expo-router';


const HomePage = () => {

    const router = useRouter()

    const { user, repos, setRepos, setUser } = useGitContext()
    const reversedRepos = useMemo(
        () => {
            return repos ? [...repos].reverse() : []
        }, [repos]
    )

    const { getRepoDetails, loading } = useRepoDetails()
    const [selectedRepo, setSelectedRepo] = useState(reversedRepos && reversedRepos.length > 0 ? reversedRepos[0] : "")
    const [chartDetails, setChartDetails] = useState<any>([])
    const [showRepoDetails, setShowRepoDetails] = useState(false)
    // const [selectedRepoDetails, setSelectedRepoDetails] = useState<any>(null)

    useEffect(() => {
        if (selectedRepo) {
            const fetchRepoDetails = async () => {
                const details = await getRepoDetails({ selectedRepo: selectedRepo })
                // setSelectedRepoDetails(() => details)
                // console.log("REpo Details in Home Page : ",details)
                console.log("REpoDetails : ", selectedRepo)

                const languageDetails = getLanguagePercentAndColor({ languages: details })
                setChartDetails(() => languageDetails)
                console.log("Language Chart Details : ", JSON.stringify(chartDetails, null, 2))
            }
            fetchRepoDetails()
        }
    }, [selectedRepo])


    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                // BackHandler.exitApp()
                // setRepos([])
                setUser(null)
                router.back()
                return true
            }

            const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress)

            return () => subscription.remove()
        }, [])
    )

    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaProvider>
                <View style={styles.container}>
                    <LinearGradient
                        colors={["#E1E18D", "#71D3F3"]}
                        start={{ x: 0.2, y: 0 }}
                        end={{ x: 0.8, y: 1 }}
                        style={styles.page}
                    >
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
                                    shadowColor: "#0000007b",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }
                            }>
                                {/* Profile Photo */}
                                <Image
                                    style={{ width: "95%", height: "95%", borderRadius: 15 }}
                                    source={{ uri: user?.avatar_url }}
                                />
                            </View>

                            <LinearGradient
                                // colors={["#A2CEB5", "#BCCB91"]}
                                colors={["#A2CEB5", "#BCCB91"]}
                                start={{ x: 0.95, y: 1 }}
                                end={{ x: 0.1, y: 0.1 }}
                                style={{
                                    width: "66%",
                                    height: "100%",
                                    borderRadius: 15,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "flex-start",
                                    paddingHorizontal: 20,
                                    gap: 10,
                                    shadowColor: "#0000005f",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}
                            >
                                <Text style={{ width: "100%", fontStyle: "italic", fontWeight: "bold", fontSize: 20 }}>{user?.name}</Text>
                                <Text style={{ width: "100%", fontStyle: "italic", fontWeight: "semibold", fontSize: 15 }}>{user?.email || user?.blog || "Email:- Not Available"}</Text>
                                <Text style={{ width: "100%", fontStyle: "italic", fontWeight: "normal", fontSize: 15 }}>{user?.location || "Address :- Not available"}</Text>
                                <Text style={{ width: "100%", fontStyle: "italic", }}>{user?.bio || "About :- Not Available"}</Text>
                            </LinearGradient>
                        </View>
                        {/* // follower */}
                        <View style={styles.followers}>

                            <LinearGradient
                                colors={["#A2CEB5", "#BCCB91"]}
                                start={{ x: 0.95, y: 1.5 }}
                                end={{ x: 0.1, y: 1 }}
                                style={{
                                    width: "32%",
                                    height: "100%",
                                    borderRadius: 15,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingHorizontal: 20,
                                    gap: 10,
                                    shadowColor: "#0000005f",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}
                            >
                                <Text>{user?.followers || 0}</Text>
                                <Text>followers</Text>

                            </LinearGradient>

                            <LinearGradient
                                colors={["#A2CEB5", "#BCCB91"]}
                                start={{ x: 0.95, y: 0.1 }}
                                end={{ x: 0.1, y: 1 }}
                                style={{
                                    width: "32%",
                                    height: "100%",
                                    borderRadius: 15,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingHorizontal: 20,
                                    gap: 10,
                                    shadowColor: "#0000005f",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}
                            >
                                <Text>{user?.following || 0}</Text>
                                <Text>following</Text>

                            </LinearGradient>

                            <LinearGradient
                                colors={["#A2CEB5", "#BCCB91"]}
                                start={{ x: 0.95, y: 0.1 }}
                                end={{ x: 0.1, y: 1 }}
                                style={{
                                    width: "32%",
                                    height: "100%",
                                    borderRadius: 15,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingHorizontal: 20,
                                    gap: 10,
                                    shadowColor: "#0000005f",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}
                            >
                                <Text>{user?.public_repos || 0}</Text>
                                <Text>repositories</Text>

                            </LinearGradient>

                            {/* <View style={{
                                width: "32%",
                                height: "100%",
                                borderRadius: 15,
                                backgroundColor: "#abab6d49",
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                            }}>
                                <Text>{user?.public_repos || 0}</Text>
                                <Text>repositories</Text>
                            </View> */}

                        </View>
                        {/* // social links */}
                        <View style={styles.socialLinks}>
                            <Text style={
                                {
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    width: "auto",
                                    backgroundColor: "#A2CEB5",
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
                                backgroundColor: "transparent",
                                borderRadius: 15,
                                // paddingHorizontal: 10,
                                // paddingVertical: 5,
                            }}>

                                <FontAwesome name="github" size={32} color="#000" />
                                <FontAwesome name="facebook" size={32} color="#1877F2" />
                                <Ionicons name="logo-instagram" size={32} color="#E1306C" />
                                <FontAwesome name="twitter" size={32} color="#1DA1F2" />
                                <FontAwesome name="telegram" size={32} color="#0088cc" />

                            </View>
                        </View>

                        {/* forks and stars */}
                        {/* <View style={styles.forksAndStars}>
                            <View>
                                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Total Forks</Text>
                                <Text>{totalForks}</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Total Stars</Text>
                                <Text>{totalStars}</Text>
                            </View>

                        </View> */}

                        {/* // repository details */}
                        <View style={styles.repositoryDetails}>
                            <Text style={
                                {
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    width: "auto",
                                    backgroundColor: "#A2CEB5",
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
                                    data={reversedRepos}

                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={({ item }) => (

                                        <LinearGradient
                                            colors={["#A2CEB5", "#bbcb91cd"]}
                                            start={{ x: 0.5, y: 1 }}
                                            end={{ x: 0.2, y: 0.1 }}
                                            style={{
                                                width: "100%",
                                                height: 50,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "flex-start",
                                                paddingHorizontal: 20,
                                                gap: 10,
                                                shadowColor: "#0000005f",
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 2,
                                                },
                                                shadowOpacity: 0.25,
                                                shadowRadius: 3.84,
                                                elevation: 5,
                                                borderTopLeftRadius: 5,
                                                borderTopRightRadius: 15,
                                                borderBottomLeftRadius: 15,
                                                borderBottomRightRadius: 5,
                                                borderRadius: item == selectedRepo ? 10 : 0,
                                                borderColor: item == selectedRepo ? "gray" : "transparent",
                                                borderWidth: item == selectedRepo ? 1 : 0,
                                            }}
                                        >
                                            <Pressable

                                                style={
                                                    {
                                                        width: "100%",
                                                        // height: "auto",
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",


                                                    }
                                                }
                                                onPress={() => setSelectedRepo(item)}
                                            >
                                                <Text>{item.name}</Text>
                                                <Text>{item.stargazers_count} Stars</Text>
                                            </Pressable>
                                            {/* <Text   >{item.forks_count} Forks</Text> */}
                                        </LinearGradient>
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
                                <Pressable
                                    onPress={() => setShowRepoDetails(false)}
                                    style={{ width: "40%" }}>
                                    <Text style={
                                        [
                                            styles.textIllusion,
                                            {
                                                width: "100%",
                                                backgroundColor: `${showRepoDetails ? "#928e8e63" : "#6b917c"}`,
                                                fontWeight: "semibold",
                                                fontSize: 15,
                                                paddingHorizontal: 10,
                                                paddingVertical: 5,
                                                borderRadius: 10,
                                            }
                                        ]
                                    }>Language Analysis</Text>
                                </Pressable>
                                <Pressable onPress={() => setShowRepoDetails(true)}
                                    style={{ width: "40%" }}>
                                    <Text style={
                                        [
                                            styles.textIllusion,
                                            {
                                                width: "100%",
                                                backgroundColor: `${showRepoDetails ? "#6b917c" : "#928e8e63"}`,
                                                fontWeight: "normal",
                                                fontSize: 15,
                                                paddingHorizontal: 10,
                                                paddingVertical: 5,
                                                borderRadius: 10,
                                            }
                                        ]
                                    }>Repo Details</Text>
                                </Pressable>
                            </View>
                            {/* Analysis Chart */}
                            <View style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                flexDirection: "row",
                            }}>
                                {/* Add loading ui while repo details changes */}
                                {showRepoDetails ? <RepoDetailsChard repo={selectedRepo} /> : <AnalysisChart chartDetails={chartDetails} />}

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
        height: "3%",
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
        height: "10%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        // backgroundColor: "#abab6d49",
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        // marginVertical: 5,
    },
    repositoryDetails: {
        width: "100%",
        height: "25%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        // backgroundColor: "#abab6d49",
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        // marginVertical: 5,
    },
    analytics: {
        width: "100%",
        height: "30%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#A2CEB5",
        borderRadius: 15,
        // paddingHorizontal: 10,
        // paddingVertical: 5,
        // marginVertical: 5,
    },
    headerButtons: {
        width: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(208, 223, 239, 0.4)",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        // padding: 10,
        shadowColor: "#9a9a9a",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 2,
        shadowRadius: 1,
        elevation: 2,
    },
    textIllusion: {
        fontWeight: "bold",
        fontSize: 20,
        width: "100%",
        borderRadius: 10,
        // backgroundColor: "#6c6c4097",
    },

})






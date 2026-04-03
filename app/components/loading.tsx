import { StyleSheet, View, Text, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const LoadingPage = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#e1e18d", "#71d3f3"]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 0.8, y: 1 }}
                style={styles.page}
            >
                {/* <View style={styles.page}> */}
                {/* // header */}
                <View style={styles.header}>
                    <View style={styles.headerButtons}>
                        <Text style={styles.textIllusion}></Text>
                    </View>
                    <View style={styles.headerButtons}>
                        <Text style={styles.textIllusion}></Text>
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
                        {/* <Image
                            source={require("../../assets/images/profile_image.jpg")}
                            style={{ width: "100%", height: "100%", borderRadius: 50 }}
                        /> */}
                        <Text style={[styles.textIllusion, { width: "50%", height: "40%", borderRadius: 50 }]}></Text>
                        <Text style={[styles.textIllusion, { width: "80%", height: "50%", borderRadius: 30 }]}></Text>
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
                        <Text style={[styles.textIllusion, { width: "80%" }]}></Text>
                        <Text style={[styles.textIllusion, { width: "60%" }]}></Text>
                        <Text style={[styles.textIllusion, { width: "100%" }]}></Text>
                        <Text style={[styles.textIllusion, { width: "90%" }]}></Text>
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
                        <Text style={[styles.textIllusion, { width: "40%" }]}></Text>
                        <Text style={[styles.textIllusion, { width: "80%" }]}></Text>
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
                        <Text style={[styles.textIllusion, { width: "40%" }]}></Text>
                        <Text style={[styles.textIllusion, { width: "80%" }]}></Text>
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
                        <Text style={[styles.textIllusion, { width: "40%" }]}></Text>
                        <Text style={[styles.textIllusion, { width: "80%" }]}></Text>
                    </View>

                </View>
                {/* // social links */}
                <View style={styles.socialLinks}>
                    <Text style={[styles.textIllusion, { width: "30%" }]}></Text>
                    <View style={{
                        width: "100%",
                        height: "80%",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexDirection: "row",
                    }}>
                        <Text style={[styles.textIllusion, { width: "15%", height: "60%", borderRadius: 50 }]}></Text>
                        <Text style={[styles.textIllusion, { width: "15%", height: "60%", borderRadius: 50 }]}></Text>
                        <Text style={[styles.textIllusion, { width: "15%", height: "60%", borderRadius: 50 }]}></Text>
                        <Text style={[styles.textIllusion, { width: "15%", height: "60%", borderRadius: 50 }]}></Text>
                        <Text style={[styles.textIllusion, { width: "15%", height: "60%", borderRadius: 50 }]}></Text>

                    </View>
                </View>
                {/* // repository details */}
                <View style={styles.repositoryDetails}>
                    <Text style={[styles.textIllusion, { width: "30%" }]}></Text>
                    <View style={{
                        width: "100%",
                        height: "90%",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}>
                        <Text style={[styles.textIllusion, { width: "100%", height: "25%" }]}></Text>
                        <Text style={[styles.textIllusion, { width: "100%", height: "25%" }]}></Text>
                        <Text style={[styles.textIllusion, { width: "100%", height: "25%" }]}></Text>

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
                        <Text style={[styles.textIllusion, { width: "30%" }]}></Text>
                        <Text style={[styles.textIllusion, { width: "30%", backgroundColor: "#63634252" }]}></Text>
                    </View>
                    <View style={{
                        width: "100%",
                        height: "80%",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "flex-end",
                        flexDirection: "row",
                    }}>
                        <Text style={[styles.textIllusion, { width: "15%", height: "90%" }]}></Text>
                        <Text style={[styles.textIllusion, { width: "15%", height: "70%" }]}></Text>
                        <Text style={[styles.textIllusion, { width: "15%", height: "53%" }]}></Text>
                        <Text style={[styles.textIllusion, { width: "15%", height: "60%" }]}></Text>
                        <Text style={[styles.textIllusion, { width: "15%", height: "80%" }]}></Text>

                    </View>
                </View>
                {/* </View> */}
            </LinearGradient>
        </View>
    )
}

export default LoadingPage

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
        height: "15%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        backgroundColor: "#abab6d49",
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        // marginVertical: 5,
    },
    repositoryDetails: {
        width: "100%",
        height: "25%",
        display: "flex",
        justifyContent: "flex-start",
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
        padding: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    textIllusion: {
        fontWeight: "bold",
        fontSize: 20,
        width: "100%",
        backgroundColor: "#6c6c4097",
        borderRadius: 10,
    }

})

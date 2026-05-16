import { navigate } from "expo-router/build/global-state/routing"
import { useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View, Image } from "react-native"
import LoadingPage from "./components/loading"
import useGetUserDetails from "./hooks/useGetUserDetails"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"

export default function index() {

  const [inputValue, setInputValue] = useState("")
  const { loading, getUserDetails } = useGetUserDetails()
  const [usernameValid, setUsernameValid] = useState(true)

  if (!loading) {
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

              <View style={{ width: "90%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row",gap: 10 }}>
                <Image
                  source={require("../assets/images/computerCoding.png")}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={
                  {
                    textAlign: "center",
                    fontSize: 25,
                    color: "black",
                    fontFamily: "sans-serif",
                    fontWeight: "bold"
                  }
                }>
                  Illuminate the Codebase.
                </Text>
              </View>

              <View style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Text style={
                  {
                    textAlign: "center",
                    fontSize: 18,
                    color: "black",
                    // marginBottom: 20,
                    fontFamily: "sans-serif"
                  }
                }>
                  Dive into the world of developers. Simply enter a GitHub username to view detailed profiles, repositories, and activity           insights — all in one place.
                </Text>
              </View>

              <Image
                source={require("../assets/images/one.png")}
                style={{ width: 280, height: 240 }}
              />

              <TextInput
                placeholder="Enter Username"
                placeholderTextColor={"#fff"}
                style={styles.inputField}
                value={inputValue}
                onChangeText={setInputValue}
              />
              {usernameValid || <Text style={{ color: "red" }}>Please enter a valid GitHub username.</Text>}
              <LinearGradient
                colors={["#0EACAA", "#0EACAA"]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 0.8, y: 1 }}
                style={styles.btn}
              >
                <Pressable
                  onPress={
                    async () => {
                      const data = await getUserDetails(inputValue)
                      if (data) {
                        console.log("User details fetched successfully.")

                        navigate("/home")
                      } else {
                        console.log("Failed to fetch user details. Please check the username and try again.")
                        setUsernameValid(false)
                      }
                    }
                  }
                >


                  <Text style={{ color: "#1c1e1f", fontStyle: "italic", fontSize: 20, fontWeight: "semibold", fontFamily: "sans-serif" }}>Submit</Text>
                </Pressable>
              </LinearGradient>

              <View style={{ width: "90%", display: "flex", justifyContent: "center",alignItems: "flex-start", flexDirection: "row" }}>
                <Image
                  source={require("../assets/images/fingerRight.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text style={
                  {
                    textAlign: "center",
                    fontSize: 18,
                    color: "black",
                    marginBottom: 20,
                    fontFamily: "sans-serif"
                  }
                }>
                  Don’t worry! We won’t let them know, You’re looking at their messy profiles.
                </Text>
              </View>
              {/* </View> */}
            </LinearGradient>
          </View>
        </SafeAreaProvider>
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaProvider>
          <LoadingPage />
        </SafeAreaProvider>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({

  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#6e7118a3",
  },
  page: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 20,
    gap: 20

  },
  inputField: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: "#9a4e71",
    backgroundColor: "#3E3204",
    color: "#fff",
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  }
})
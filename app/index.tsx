import { navigate } from "expo-router/build/global-state/routing"
import { useEffect, useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import LoadingPage from "./components/loading"
import useGitContext from "./context/GitContext"
import useGetUserDetails from "./hooks/useGetUserDetails"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"




export default function index() {

  const [inputValue, setInputValue] = useState("")
  const { loading, getUserDetails } = useGetUserDetails()
  // const { user } = useGitContext()
  // useEffect(() => {
  //   navigate("/home")
  // })
  // return (
  //   <View>
  //     <Text>hello</Text>
  //   </View>
  // )
  if (!loading) {
    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaProvider>
          <View style={styles.container}>
            <View style={styles.page}>
              <TextInput
                placeholder="Enter Username"
                style={styles.inputField}
                value={inputValue}
                onChangeText={setInputValue}
              />
              <Pressable
                style={styles.btn}

                onPress={
                  async () => {
                    const data = await getUserDetails("hiteshchoudhary")
                    // console.log("User Data input  : \n", JSON.stringify(data, null, 2))
                    navigate("/home")
                  }
                }
              >
                <View>
                  <Text style={{ color: "#fff" }}>Submit</Text>
                </View>
              </Pressable>
            </View>
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
    justifyContent: "center",
    alignItems: "center"
  },
  inputField: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 10
  },
  btn: {
    marginTop: 20,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10
  }

})
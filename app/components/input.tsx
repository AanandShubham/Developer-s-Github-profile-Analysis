import { useState } from "react"
import { Pressable, StyleSheet, TextInput, View, Text } from "react-native"
import useGetUserDetails from "../hooks/useGetUserDetails"

const InputPage = () => {

    const { loading, getUserDetails } = useGetUserDetails()

    const [inputValue, setInputValue] = useState("")

    return (
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
                            const data = await getUserDetails(inputValue)
                            console.log("User Data : \n",JSON.stringify(data, null, 2))
                        }
                    }
                >
                    <View>
                        <Text style={{ color: "#fff" }}>Submit</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default InputPage

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
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
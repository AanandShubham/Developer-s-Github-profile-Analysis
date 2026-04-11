import { Stack } from "expo-router";
import { GitContextProvider } from "./context/GitContext";

export default function RootLayout() {
  return(
    <GitContextProvider>
      <Stack screenOptions={{ headerShown:false, animation:"none" }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
      </Stack>
    </GitContextProvider>
  )
}

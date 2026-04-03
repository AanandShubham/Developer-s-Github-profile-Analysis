import { useState } from "react"

const useGetUserDetails = () => {

    const [loading, setLoading] = useState(false)

    const getUserDetails = async (userName: string) => {
        if (userName === null || userName === "") {
            return false
        }

        setLoading(true)
        try {

            const response = await fetch(`https://api.github.com/users/${userName}`)
            const data = await response.json()
            setLoading(false)
            return data
        } catch (error) {
            console.log("-----------------------------------------------")
            console.error("Error fetching user details:", error)
            console.log("-----------------------------------------------")
            setLoading(false)
            return false
        }
    }
    return { getUserDetails, loading }
}

export default useGetUserDetails
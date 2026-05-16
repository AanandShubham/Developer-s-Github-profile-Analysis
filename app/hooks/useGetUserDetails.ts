import { useState } from "react"
import useGitContext from "../context/GitContext"

const useGetUserDetails = () => {

    const [loading, setLoading] = useState(false)

    const { setUser, setRepos } = useGitContext()

    const getUserDetails = async (userName: string) => {

        if (userName === null || userName === "") {
            return false
        }
        setLoading(true)
        try {
            const response = await fetch(`https://api.github.com/users/${userName}`)
            const data = await response.json()
            if (data.message === "Not Found") {
                setLoading(false)
                return false
            }

            // total repos
            if (data.repos_url) {
                const reposResponse = await fetch(data.repos_url)
                const reposData = await reposResponse.json()
                setRepos(() => reposData)
            }                            
            setUser(data)
            setLoading(false)
            return true
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
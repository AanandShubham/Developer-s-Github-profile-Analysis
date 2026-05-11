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
            // starred_url , received_events_url , repos_url


            // total forks          
            // if (data.received_events_url) {
            //     const receivedEventsResponse = await fetch(data.received_events_url)
            //     const receivedEventsData = await receivedEventsResponse.json()
            //     data.received_events = receivedEventsData
            //     // console.log("Total Forks : ", JSON.stringify(receivedEventsData.size, null, 2))
            //     // console.log("Total Forks : ",receivedEventsData.length)

            //     setTotalForks(receivedEventsData?.length || 0)
            // }
            // // total stars
            // if (data.starred_url) {
            //     const starredResponse = await fetch(data.starred_url.replace("{/owner}{/repo}", ""))
            //     const starredData = await starredResponse.json()
            //     data.starred = starredData
            //     // console.log("Total Stars : ", JSON.stringify(starredData.size, null, 2))
            //     // console.log("Total Stars : ", starredData.length)
            //     setTotalStars(starredData?.length || 0)
            // }
            
            // total repos
            if (data.repos_url) {
                const reposResponse = await fetch(data.repos_url)
                const reposData = await reposResponse.json()
                // data.repos = reposData
                // console.log("Total Repos : ",JSON.stringify(reposData,null,2))
                setRepos(() => reposData) // Update the repos state with the fetched repositories
            }

            console.log("-----------------------------------------------")
            // console.log("Fetched user details:", data)
            console.log("-----------------------------------------------")
            setUser(data)
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
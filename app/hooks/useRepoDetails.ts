import { useState } from "react"

const useRepoDetails = () => {
    const [loading, setLoading] = useState(false)

    const getRepoDetails = async ({ repoName,username }: { repoName: any, username:string }) => {
        setLoading(true)
        try {
            const response = await fetch(repoName.languages_url)
            const data = await response.json()
            return data
        } catch (error) {
            console.error("Error fetching repository details:", error)
        } finally {
            setLoading(false)
        }
    }

    return { getRepoDetails, loading }
}

export default useRepoDetails 
import { useState } from "react"

const useRepoDetails = () => {
    const [loading, setLoading] = useState(false)

    const getRepoDetails = async ({ selectedRepo }: { selectedRepo: any }) => {
        // console.log("Repo Name : ",repoName)
        setLoading(true)
        try {
            const response = await fetch(selectedRepo.languages_url)
            const data = await response.json()
            // console.log("Repo Details : ",JSON.stringify(data,null,2))
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
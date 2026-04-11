import React, { useContext, useState} from "react"


type GitHubUser = {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    user_view_type: string
    site_admin: boolean
    name: string | null
    company: string | null
    blog: string
    location: string | null
    email: string | null
    hireable: boolean | null
    bio: string | null
    twitter_username: string | null
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: string
    updated_at: string
}

type GitContextType = {
    user: GitHubUser | null
    setUser: React.Dispatch<React.SetStateAction<GitHubUser | null>>,
    totalStars?: number,
    setTotalStars?: React.Dispatch<React.SetStateAction<number>>,
    totalForks?: number,
    setTotalForks?: React.Dispatch<React.SetStateAction<number>>,
    repos?: any[],
    setRepos?: React.Dispatch<React.SetStateAction<any[]>>
}

export const GitContext = React.createContext<GitContextType>({
    user: null,
    setUser: () => { },
    totalForks: 0,
    setTotalForks: () => { },
    totalStars: 0,
    setTotalStars: () => { },
    repos: [],
    setRepos: () => { }

})

export const GitContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<GitHubUser | null>(null)
    const [totalForks, setTotalForks] = useState<number>(0)
    const [totalStars, setTotalStars] = useState<number>(0)
    const [repos, setRepos] = useState<any[]>([])

    return (
        <GitContext.Provider value={
            {
                user,
                setUser,
                totalForks,
                setTotalForks,
                totalStars,
                setTotalStars,
                repos,
                setRepos
            }
        }>
            {children}
        </GitContext.Provider>
    )
}

const useGitContext = () => {
    return useContext(GitContext)
}

export default useGitContext


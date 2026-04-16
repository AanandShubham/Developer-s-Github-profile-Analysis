import React from 'react'

const getLanguagePercentAndColor = ({ languages }: { languages: Object }) => {


    const languageColors: Record<string, string> = {
        Java: "#b07219",
        HTML: "#e34c26",
        CSS: "#563d7c",
        JavaScript: "#f1e05a",
        TypeScript: "#3178c6",
        Kotlin: "#A97BFF",
        Python: "#3572A5",
        C: "#555555",
        "C++": "#f34b7d",
        CSharp: "#178600",
        Go: "#00ADD8",
        Rust: "#dea584",
        Swift: "#ffac45",
        Dart: "#00B4AB",
        Shell: "#89e051",
    }

    const total = Object.values(languages).reduce((sum, val) => sum + val, 0)

    const percentages = Object.entries(languages).map(([lang, value]) => ({
        language: lang,
        percentage: ((value / total) * 100).toFixed(2),
        languageColor: languageColors[lang] || "#fff"
    }))

    // console.log("Language Percentages : ", JSON.stringify(percentages, null, 2))

    return percentages

}

export default getLanguagePercentAndColor

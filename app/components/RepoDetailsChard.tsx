import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RepoDetailsChard = ({ repo }: { repo: any }) => {

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  // Convert ISO date strings to Date objects and format them
  const createdAt = new Date(repo.created_at).toLocaleDateString('en-GB', dateOptions)
  const updatedAt = new Date(repo.updated_at).toLocaleDateString('en-GB', dateOptions)
  const pushedAt = new Date(repo.pushed_at).toLocaleDateString('en-GB', dateOptions)

  // console.log("created : ", createdAt)
  // console.log("updated_at : ", updatedAt)
  // console.log("pushed_at : ", pushedAt)

  return (

    <View
      style={styles.mainContainer}>
      <View>
        {/* repo details */}
        <View style={styles.repoSection}>

          <View style={
            {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }
          }>
            <View style={styles.textSection} >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Repository : </Text>
              <Text style={{ fontSize: 16, flex: 1 }}
                numberOfLines={1}
                ellipsizeMode="tail">{repo.name}</Text>
            </View>
            <Text style={{ fontWeight: "bold", padding: 2 }}>Size : {repo.size} KB</Text>
          </View>


          <View style={
            {
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }
          }>
            <View style={styles.textSection} >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Description : </Text>
              <Text
                style={{ fontSize: 16, flexShrink: 1 }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {repo.description ? repo.description : "No description available for this repository."}
              </Text>
            </View>

            <View style={styles.textSection} >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>URL : </Text>
              <Text
                style={{ fontSize: 12, flexShrink: 1 }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {repo.html_url}
              </Text>

            </View>
          </View>

        </View>

        {/* repo stats */}
        <View style={styles.repoStats}>
          {/* numbers */}
          <View style={{
            width: "auto",
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}>
            <Text style={styles.statsStyle}>Issues : {repo.open_issues}</Text>
            <Text style={styles.statsStyle}>Stars : {repo.stargazers_count}</Text>
          </View>
          <View style={{
            width: "auto",
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}>
            <Text style={styles.statsStyle}>Watchers : {repo.watchers}</Text>
            <Text style={styles.statsStyle}>Forks : {repo.forks}</Text>
          </View>
        </View>

        {/* repo dates */}
        <View style={
          {
            width: "100%",
            height: "20%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            // backgroundColor: "#bd5555"
          }
        }>
          {/* push and updated at */}
          <View style={styles.datesStyle}>
            <Text>Created At</Text>
            <Text>{createdAt}</Text>
          </View>
          <View style={styles.datesStyle}>
            <Text >Pushed At </Text>
            <Text >{pushedAt}</Text>
          </View>
          <View style={styles.datesStyle}>
            <Text>Updated At</Text>
            <Text>{updatedAt}</Text>
          </View>

        </View>

      </View>
    </View>
  )
}

export default RepoDetailsChard

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // paddingTop: 10,
  },
  repoSection: {
    width: "98%",
    height: "36%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // backgroundColor: "#f0f0f0",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 5,
  },
  textSection: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",

  },
  repoStats: {
    width: "100%",
    height: "32%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "#bd5555",
    
  },
  statsStyle: {
    width: "auto",
    height: "auto",
    // backgroundColor: "lightgray",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  datesStyle: {
    width: "auto",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    // backgroundColor: "lightgray",
  }
})


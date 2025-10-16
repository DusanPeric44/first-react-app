import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ProfileInfo from "../components/ProfileInfo";
import Project from "../components/Project";

const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <ProfileInfo
        fullname="John Doe"
        jobPosition="UI/UX Designer"
        desc="We're passionate about creating beautiful desing for startups & leading brands"
        image={require("../assets/profile-icon-male-avatar.jpg")}
      />
      <View style={styles.heading}>
        <Text style={styles.text}>PROJECTS</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>View All</Text>
        </TouchableOpacity>
      </View>
      <Project
        first={require("../assets/o.jpg")}
        second={require("../assets/Avatar-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    alignItems: "center",
    marginTop: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  screen: {
    backgroundColor: "white",
  },
  btnText: {
    fontWeight: "bold",
    color: "white",
  },
  btn: {
    backgroundColor: "#FFD700",
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default ProfileScreen;

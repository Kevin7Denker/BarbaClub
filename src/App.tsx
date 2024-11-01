import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";

import ServerConfig from "./Server/ServerConfig";

function App() {
  useEffect(() => {
    const server = new ServerConfig();
  }, []);

  return (
    <View style={styles.container}>
      <Text>BarbaClub!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;

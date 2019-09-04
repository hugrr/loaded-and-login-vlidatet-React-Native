import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

export default class Preloader extends Component {
  render() {
    return (
      <View style={styles.preloaderView}>
        <ActivityIndicator color="#fff" size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  preloaderView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009929"
  }
});

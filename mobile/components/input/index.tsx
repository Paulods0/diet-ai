import { StyleSheet, Text, TextInput, View } from "react-native"
import React from "react"

export default function Input() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Digite algo..." />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

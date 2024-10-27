import React from "react"
import Header from "@/components/header"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { colors } from "@/constants/colors"
import Input from "@/components/input"

export default function index() {
  return (
    <View style={styles.container}>
      <Header stepText="Passo 1" title="Vamos começar" />

      <ScrollView style={styles.content}>
        <Text style={styles.label}>Nome:</Text>
        <Input />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  label: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
    marginBottom: 8,
  },
})

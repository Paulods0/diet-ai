import {
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React from "react"
import { Feather } from "@expo/vector-icons"
import { colors } from "@/constants/colors"
import { router } from "expo-router"

type HeaderProps = {
  title: string
  stepText: string
}

export default function Header({ stepText, title }: HeaderProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <Pressable onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color="#000" />
          </Pressable>

          <Text style={styles.text}>
            {stepText}
            <Feather name="loader" size={16} color="#000" />
          </Text>
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
    marginBottom: 14,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight! + 34 : 34,
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 34,
  },
  row: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.background,
  },
})
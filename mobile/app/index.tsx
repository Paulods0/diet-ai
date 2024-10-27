import React from "react"
import { colors } from "../constants/colors"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Link } from "expo-router"

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} />

      <Text style={styles.title}>Dieta AI.</Text>

      <Text style={styles.text}>
        Sua dieta personalizada com inteligência artificial.
      </Text>

      <Link href="/step" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Gerar dieta</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.green,
  },
  text: {
    width: 240,
    fontSize: 16,
    marginTop: 8,
    marginBottom: 8,
    textAlign: "center",
    color: colors.white,
  },
  button: {
    height: 40,
    width: "100%",
    marginTop: 34,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
  },
})

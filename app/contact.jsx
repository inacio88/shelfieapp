import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact page</Text>
      <Link style={styles.link} href="/">Back home</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title:
    {
        fontWeight: 'bold',
        fontSize: 18
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }

})
import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import Logo from '../assets/img/logo_light.png'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.img} />
        <Text style={styles.title}>The number 1</Text>

        <Text style={{marginTop: 10, marginBottom: 30}}>
            Reading list app
        </Text>

        <Link style={styles.link} href="/about">About page</Link>
        <Link style={styles.link} href="/contact">Contact page</Link>

    </View>
  )
}

export default Home

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
    img: {
        marginVertical: 20
    },

    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }

})
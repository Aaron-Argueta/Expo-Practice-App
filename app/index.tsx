import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Redirect, router, Link } from 'expo-router'
import React from 'react'

// components
import CustomButton from '@/components/CustomButton'

export default function Index() {
  return (
    <SafeAreaView style={{minHeight: '85%'}}>
        <View style={styles.container}>
          <Image source={require('@/assets/images/react-logo2x.png')}/>
          <Text style={styles.welcometext}>Welcome to my React Native App!</Text>
          <CustomButton 
            title="Log In"
            handlePress = {() => router.push('/login')}
            style={styles.buttonStyle}
          />
        </View> 
    </SafeAreaView>   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcometext: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonStyle: {
    backgroundColor: '#151718',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
})
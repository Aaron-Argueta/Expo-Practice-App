import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import { router, Link } from 'expo-router'
import { auth, signInWithEmailAndPassword } from '@/firebase'
import React, { useState, useEffect } from 'react'

// components
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        router.push("/home")
      }
    })
    return unsubscribe;
  }, [])

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Logged in with', user.email);
    }
    catch (error) {
      console.error('Error logging in: ', error);
    }
  }

  return (
    <SafeAreaView style={{minHeight: '85%'}}>
      <View style={styles.container}>
        <Text style={{fontSize: 25, textAlign: 'center'}}>Log in</Text>  

        <FormField
          title="Email"
          value={email}
          handleChangeText={setEmail}
          style={styles.inputBox}
        />
        <FormField
          title="Password"
          value={password}
          handleChangeText={setPassword}
          style={styles.inputBox}
        />

        <CustomButton
          title="Log In"
          handlePress = {handleLogin}
          style={styles.buttonStyle}
        /> 
        
        <View style={styles.textContainer}>
          <Text>Don't have an account? </Text>
          <Link style={{color: 'blue'}} href="/sign-up">Sign Up</Link>
        </View>
      </View>  
      <StatusBar/>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  inputBox: {
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 15,
  },
  buttonStyle: {
    backgroundColor: '#151718',
    marginVertical: 10,
    marginHorizontal: 30,
    padding: 20,
    alignItems: 'center',
    borderRadius: 15,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  }
})
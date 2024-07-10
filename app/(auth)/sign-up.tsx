import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import { router, Link } from 'expo-router'
import { auth,  createUserWithEmailAndPassword } from '@/firebase'
import React, { useState } from 'react'

// components
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Signed up with', user.email);
    }
    catch (error) {
      console.error('Error signing up: ', error);
    }
  }

  return (
    <SafeAreaView style={{minHeight: '90%'}}>
      <View style={styles.container}>
        <Text style={{fontSize: 25, textAlign: 'center'}}>Create an Account</Text>  

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
          title="Sign Up"
          handlePress = {handleSignUp}
          style={styles.buttonStyle}
        />
        
        <View style={styles.subcontainer}>
          <Text>Have an account already? </Text>
          <Link style={{color: 'blue'}} href="/login">Log in</Link>
        </View>
      </View>  
      <StatusBar />
    </SafeAreaView>
      
  )
}

export default SignUpScreen

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
  subcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  }
})
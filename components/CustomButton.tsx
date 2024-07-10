import { StyleSheet, TouchableOpacity, Text, GestureResponderEvent, ViewStyle, StyleProp } from 'react-native'
import React from 'react'

// Interface helps assign types to props
interface CustomButtonProps {
    title: string;
    handlePress: (event: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;
    style2?: StyleProp<ViewStyle>
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <TouchableOpacity 
        style={props.style}
        onPress={props.handlePress}
        activeOpacity={0.6}
    >
      <Text style={styles.buttonLabel}> {props.title} </Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  buttonLabel:{
    color: 'white', 
    fontWeight: '600',
  }
})
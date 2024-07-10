import { StyleSheet, Text, View } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'

//component & hooks
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen 
        name="home"  
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="create"  
        options={{
          title: 'Create',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused? 'add-circle' : 'add-circle-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="profile"  
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})

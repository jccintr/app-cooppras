import { StyleSheet, Text, View,TouchableOpacity,Pressable } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const AddButton = ({onAdd}) => {
  return (
    <TouchableOpacity onPress={()=>onAdd()} >
       <Feather name="plus-square" size={34} color="black" />
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Outros = () => {
  return (
     <View style={styles.container}>
      <Text>Outros</Text>
    </View>
  )
}

export default Outros

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
      
        paddingHorizontal:20
      }
})
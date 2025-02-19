import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { cores } from '../styles/cores'

const TableHeader = () => {
  return (
     <View style={styles.container}>

        <View style={styles.inputArea}>
            <Text style={styles.input}>Descrição</Text>
        </View>

        <View style={styles.inputArea}>
            <Text style={styles.input}>Quant</Text> 
        </View>

        <View style={styles.inputArea}>
           <Text style={styles.input}>Peso (kg)</Text>   
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.input}>Valor (R$)</Text>
        </View>

    </View>
  )
}

export default TableHeader

const styles = StyleSheet.create({
container:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
},
inputArea: {
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center',
  
    },
input: {
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 4,
    fontWeight:'bold'
    },
})
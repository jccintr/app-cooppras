import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, {useState} from 'react'
import { cores } from '../styles/cores'

const TableRowInput = ({descricao,data,setData}) => {
 
   const [quant,setQuant] = useState(data.quant);

  return (
    <View style={styles.container}>

      <View style={styles.descricaoArea}>  
         <Text style={{flex:1}}>{descricao}</Text>
      </View>

      <View style={styles.inputArea}>
           <TextInput 
                style={styles.input}
                value={data.quant}
                onChangeText={t=>setData({ ...data, quant: t })}
                keyboardType='number-pad'
            />        
      </View>

      <View style={styles.inputArea}>
           <TextInput 
                style={styles.input}
                value={data.peso}
                onChangeText={t=>setData({ ...data, peso: t })}
                keyboardType='number-pad'
            />        
      </View>

      <View style={styles.inputArea}>
           <TextInput 
                style={styles.input}
                value={data.valor}
                onChangeText={t=>setData({ ...data, valor: t })}
                keyboardType='number-pad'
            />        
      </View>

    </View>
  )
}

export default TableRowInput

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    descricaoArea:{
      width: '20%',
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      },
     inputArea: {
            backgroundColor: cores.inputBackground,
            width: '20%',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth:1,
            borderColor: '#d1d1d1',
            borderRadius: 10,
        },
         input: {
          flex: 1,
          fontSize: 14,
          paddingHorizontal: 4,
          color: '#000',
         marginLeft: 10,
          height: 48,
        },
})
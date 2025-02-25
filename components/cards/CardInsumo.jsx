import { StyleSheet, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { cores } from '../../styles/cores';
import Entypo from '@expo/vector-icons/Entypo';

const CardInsumo = ({insumo,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>onPress(insumo)}>
       <Text style={styles.label}>{insumo.tipo}</Text>
       <Entypo name="chevron-small-right" size={24} color={cores.black} />
    </TouchableOpacity>
  )
}

export default CardInsumo

const styles = StyleSheet.create({
     container:{
                flexDirection:'row',
                justifyContent:'space-between',
                width:'100%',
                backgroundColor:cores.inputBackground,
                padding: 20,
                borderRadius: 20
            },
            label:{
                fontSize:18,
                color: cores.jetBlack,
                fontWeight: 'bold'
            },
})
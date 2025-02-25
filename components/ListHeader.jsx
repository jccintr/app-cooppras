import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { cores } from '../styles/cores'

const ListHeader = ({onPress}) => {
  
  return(
  <TouchableOpacity onPress={onPress} style={{width:'100%',marginBottom:20}}>
    <Text style={{textAlign:'center',fontSize:16,color:cores.blueGray}}>Adicionar</Text>
  </TouchableOpacity>
  )
}

export default ListHeader
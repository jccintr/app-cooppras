import { StyleSheet, Text, View,TouchableOpacity,FlatList } from 'react-native'
import React, {useEffect,useContext} from 'react'

import { TableContext } from '../contexts/TableContext'
import CardDoenca from '../components/cards/CardDoenca'
import HeightSpacer from '../components/reusable/HeightSpacer'
import { cores } from '../styles/cores'
 
const ListHeader = () => {
  return(
  <TouchableOpacity onPress={()=>{}} style={{width:'100%',marginBottom:20}}>
    <Text style={{textAlign:'center',fontSize:16,color:cores.blueGray}}>Adicionar Doença</Text>
  </TouchableOpacity>
  )
}

const Doencas = ({navigation}) => {
  const {doencas,setDoencas} = useContext(TableContext)


const onAdd = () => {
  const dt = new Date();
     alert(dt)
}

  return (
    <View style={styles.container}>
     
     <FlatList 
        ListHeaderComponent={<ListHeader/>}
        showsVerticalScrollIndicator={false}
        style={{width:'100%'}}
        data={doencas}
        keyExtractor={(item)=> item.id.toString()}
        renderItem={({item})=><CardDoenca doenca={item} onPress={()=>{}} />}
        ItemSeparatorComponent={<HeightSpacer h={8}/>}
       // ListEmptyComponent={<EmptyList title="No accounts found" mensagem={'Please, create a new account'}/>}
        contentContainerStyle={doencas.length===0?{flexGrow:1,alignItems:'center',justifyContent:'center'}:''}
    />
    </View>
  )
}

export default Doencas

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    //justifyContent: 'center',
    padding:20
}
})
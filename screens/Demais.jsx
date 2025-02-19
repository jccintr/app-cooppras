import { StyleSheet, View } from 'react-native'
import React,{useState} from 'react'
import TableRowInput from '../components/TableRowInput'
import TableHeader from '../components/TableHeader'
import HeightSpacer from '../components/reusable/HeightSpacer'



const Demais = () => {
  const [bovino,setBovino] = useState({quant:'',peso:'',valor:''})
  const [suino,setSuino] = useState({quant:'',peso:'',valor:''})
  const [aves,setAves] = useState({quant:'',peso:'',valor:''})
  const [piscicultura,setPiscicultura] = useState({quant:'',peso:'',valor:''})
  const [apicultura,setApicultura] = useState({quant:'',peso:'',valor:''})
  const [apiculturaProducao,setApiculturaProducao] = useState({quant:'',peso:'',valor:''})
 

  return (
    <View style={styles.container}>
       <TableHeader/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Bovino" data={bovino} setData={setBovino}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Suino" data={suino} setData={setSuino}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Aves" data={aves} setData={setAves}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Piscicultura" data={piscicultura} setData={setApicultura}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Apicultura (Apiário / Enxames)" data={apicultura} setData={setApicultura}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Apicultura (Produção de mel)" data={apiculturaProducao} setData={setApiculturaProducao}/>
    </View>
  )
}

export default Demais

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        padding:20
    }
})
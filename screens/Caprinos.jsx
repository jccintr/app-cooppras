import { StyleSheet, View } from 'react-native'
import React,{useState} from 'react'
import TableRowInput from '../components/TableRowInput'
import TableHeader from '../components/TableHeader'
import HeightSpacer from '../components/reusable/HeightSpacer'



const Caprinos = () => {
  const [matriz,setMatriz] = useState({quant:'',peso:'',valor:''})
  const [reprodutor,setReprodutor] = useState({quant:'',peso:'',valor:''})
  const [emAleitamento,setEmAleitamento] = useState({quant:'',peso:'',valor:''})
  const [machoDesmamado,setMachoDesmamado] = useState({quant:'',peso:'',valor:''})
  const [femeaDesmamada,setFemeaDesmamada] = useState({quant:'',peso:'',valor:''})
  const [machos1mais,setMacho1mais] = useState({quant:'',peso:'',valor:''})

  return (
    <View style={styles.container}>
       <TableHeader/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Matriz" data={matriz} setData={setMatriz}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Reprodutor" data={reprodutor} setData={setReprodutor}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Em aleitamento" data={emAleitamento} setData={setEmAleitamento}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Machos desmamados" data={machoDesmamado} setData={setMachoDesmamado}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Fêmeas desmamadas" data={femeaDesmamada} setData={setFemeaDesmamada}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Machos > 1 ano" data={machos1mais} setData={setMacho1mais}/>
    </View>
  )
}

export default Caprinos

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        padding:20
    }
})
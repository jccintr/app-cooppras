import { StyleSheet, View } from 'react-native'
import React,{useState} from 'react'
import TableRowInput from '../components/TableRowInput'
import TableHeader from '../components/TableHeader'
import HeightSpacer from '../components/reusable/HeightSpacer'

const ProducaoAnual = () => {
    const [natalidade,setNatalidade] = useState({quant:'',peso:'',valor:''})
      const [mortalidade,setMortalidade] = useState({quant:'',peso:'',valor:''})
      const [abate,setAbate] = useState({quant:'',peso:'',valor:''})
      const [roubo,setRoubo] = useState({quant:'',peso:'',valor:''})
      const [mortalidadeAcidente,setMortalidadeAcidente] = useState({quant:'',peso:'',valor:''})
      const [mortalidadeIntoxicacao,setMortalidadeIntoxicacao] = useState({quant:'',peso:'',valor:''})

  return (
    <View style={styles.container}>
       <TableHeader/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Média de natalidade" data={natalidade} setData={setNatalidade}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Média de mortalidade" data={mortalidade} setData={setMortalidade}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Média de Abate" data={abate} setData={setAbate}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Média de roubo ou furto" data={roubo} setData={setRoubo}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Mortalidade por acidente ou predador" data={mortalidadeAcidente} setData={setMortalidadeAcidente}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Mortalidade por intoxicação natural" data={mortalidadeIntoxicacao} setData={setMortalidadeIntoxicacao}/>
    </View>
  )
}

export default ProducaoAnual

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        padding:20
    }
})
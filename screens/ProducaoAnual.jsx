import { StyleSheet, View } from 'react-native'
import React,{useState,useContext} from 'react'
import TableRowInput from '../components/TableRowInput'
import TableHeader from '../components/TableHeader'
import HeightSpacer from '../components/reusable/HeightSpacer'
import Botao from '../components/reusable/Botao'
import { cores } from '../styles/cores'
import { TableContext } from '../contexts/TableContext'

const ProducaoAnual = ({navigation}) => {
     const {producaoAnualGlobal,setProducaoAnualGlobal} = useContext(TableContext);
    const [natalidade,setNatalidade] = useState(producaoAnualGlobal[0])
      const [mortalidade,setMortalidade] = useState(producaoAnualGlobal[1])
      const [abate,setAbate] = useState(producaoAnualGlobal[2])
      const [roubo,setRoubo] = useState(producaoAnualGlobal[3])
      const [mortalidadeAcidente,setMortalidadeAcidente] = useState(producaoAnualGlobal[4])
      const [mortalidadeIntoxicacao,setMortalidadeIntoxicacao] = useState(producaoAnualGlobal[5])

      const saveData = () => {
        const newProducaoAnual = [natalidade,mortalidade,abate,roubo,mortalidadeAcidente,mortalidadeIntoxicacao];
        setProducaoAnualGlobal(newProducaoAnual);
        navigation.goBack();
    }

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
       <HeightSpacer h={20}/>
       <Botao 
            onPress={()=>saveData()} 
            text={'SALVAR'} 
            textSize={16} 
            textColor={cores.white} 
            width={'100%'} 
            backgroundColor={cores.primary} 
            borderWidth={0} 
            borderRadius={10} 
            isLoading={false}
                />
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
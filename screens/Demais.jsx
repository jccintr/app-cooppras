import { StyleSheet, View } from 'react-native'
import React,{useContext, useState} from 'react'
import TableRowInput from '../components/TableRowInput'
import TableHeader from '../components/TableHeader'
import HeightSpacer from '../components/reusable/HeightSpacer'
import Botao from '../components/reusable/Botao'
import { cores } from '../styles/cores'
import { TableContext } from '../contexts/TableContext'


const Demais = ({navigation}) => {
  const {demaisProducaoGlobal,setDemaisProducaoGlobal} = useContext(TableContext);
  const [bovinos,setBovinos] = useState(demaisProducaoGlobal[0])
  const [suinos,setSuinos] = useState(demaisProducaoGlobal[1])
  const [aves,setAves] = useState(demaisProducaoGlobal[2])
  const [piscicultura,setPiscicultura] = useState(demaisProducaoGlobal[3])
  const [apicultura,setApicultura] = useState(demaisProducaoGlobal[4])
  const [apiculturaProducao,setApiculturaProducao] = useState(demaisProducaoGlobal[5])
 

  const saveData = () => {
    const newDemaisProducao = [bovinos,suinos,aves,piscicultura,apicultura,apiculturaProducao];
    setDemaisProducaoGlobal(newDemaisProducao);
    navigation.goBack();
}

  return (
    <View style={styles.container}>
       <TableHeader/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Bovinos" data={bovinos} setData={setBovinos}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Suinos" data={suinos} setData={setSuinos}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Aves" data={aves} setData={setAves}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Piscicultura" data={piscicultura} setData={setPiscicultura}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Apicultura (Apiário / Enxames)" data={apicultura} setData={setApicultura}/>
       <HeightSpacer h={10}/>
       <TableRowInput descricao="Apicultura (Produção de mel)" data={apiculturaProducao} setData={setApiculturaProducao}/>
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

export default Demais

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        padding:20
    }
})
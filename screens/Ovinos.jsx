import { StyleSheet, View } from 'react-native'
import React,{useState,useContext} from 'react'
import TableRowInput from '../components/TableRowInput'
import TableHeader from '../components/TableHeader'
import HeightSpacer from '../components/reusable/HeightSpacer'
import { TableContext } from '../contexts/TableContext'
import { cores } from '../styles/cores'
import Botao from '../components/reusable/Botao'


const Ovinos = ({navigation}) => {
      const {ovinosGlobal,setOvinosGlobal} = useContext(TableContext);
      const [matriz,setMatriz] = useState(ovinosGlobal[0])
      const [reprodutor,setReprodutor] = useState(ovinosGlobal[1])
      const [emAleitamento,setEmAleitamento] = useState(ovinosGlobal[2])
      const [machoDesmamado,setMachoDesmamado] = useState(ovinosGlobal[3])
      const [femeaDesmamada,setFemeaDesmamada] = useState(ovinosGlobal[4])
      const [machos1mais,setMacho1mais] = useState(ovinosGlobal[5])

      const saveData = () => {
        const newOvinos = [matriz,reprodutor,emAleitamento,machoDesmamado,femeaDesmamada,machos1mais];
        setOvinosGlobal(newOvinos);
        navigation.goBack();
    }

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


export default Ovinos

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        padding:20
    }
})
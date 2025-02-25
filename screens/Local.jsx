import { StyleSheet, SafeAreaView,StatusBar,ScrollView,Alert } from 'react-native'
import React, {useState,useContext} from 'react'
import FormInput from '../components/FormInput';
import Botao from '../components/reusable/Botao';
import { cores } from '../styles/cores';
import { LocalContext } from '../contexts/LocalContext';

const Local = ({navigation}) => {
    const {dataVisitaGlobal,setDataVisitaGlobal,localGlobal,setLocalGlobal,tecnicoGlobal,setTecnicoGlobal} = useContext(LocalContext);
    const [dataVisita,setDataVisita] = useState(dataVisitaGlobal);
    const [local,setLocal] = useState(localGlobal);
    const [tecnico,setTecnico] = useState(tecnicoGlobal);

      const saveData = () => {
    
        if(dataVisita.trim().length===0){
            Alert.alert("Erro", "Informe a data da visita por favor.");
            return
        }

        if(local.trim().length===0){
            Alert.alert("Erro", "Informe o local da visita por favor.");
            return
        }

        if(tecnico.trim().length===0){
            Alert.alert("Erro", "Informe o nome do técnico responsável por favor.");
            return
        }
        setDataVisitaGlobal(dataVisita);
        setLocalGlobal(local);
        setTecnicoGlobal(tecnico);
          
          navigation.goBack();
        }

  return (
    <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor={'#fff'} barStyle="dark-content"/>
            <ScrollView showsVerticalScrollIndicator={false}>
          
            <FormInput label={'Data da Visita:'} value={dataVisita} onChangeText={t=>setDataVisita(t)} placeholder="Informe a data da visita" />
            <FormInput label={'Local da Visita:'} value={local} onChangeText={t=>setLocal(t)} placeholder="Informe o local da visita" />
            <FormInput label={'Responsável Técnico:'} value={tecnico} onChangeText={t=>setTecnico(t)} placeholder="Informe o responsável técnico da visita" />
           
           
        
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
            </ScrollView>
        </SafeAreaView>
  )
}

export default Local

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:5,
        paddingHorizontal:20,
        paddingBottom:20,
      },
})
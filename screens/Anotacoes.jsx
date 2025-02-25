import { StyleSheet, SafeAreaView,StatusBar } from 'react-native'
import React, {useState,useContext} from 'react'
import Botao from '../components/reusable/Botao';
import { cores } from '../styles/cores';
import { LocalContext } from '../contexts/LocalContext';
import InputArea from '../components/InputArea';


const Anotacoes = ({navigation}) => {
     const {anotacoesGlobal,setAnotacoesGlobal} = useContext(LocalContext);
     const [anotacoes,setAnotacoes] = useState(anotacoesGlobal);
      
    
    const saveData = () => {

    setAnotacoesGlobal(anotacoes);
    navigation.goBack();

    }
        
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar animated={true} backgroundColor={'#fff'} barStyle="dark-content"/>
    <InputArea value={anotacoes} placeholder={'Insira aqui as suas anotações'} label={'Anotações'} onChangeText={setAnotacoes} />
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
   
</SafeAreaView>
  )
}

export default Anotacoes

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:5,
        paddingHorizontal:20,
        paddingBottom:20,
      },
})
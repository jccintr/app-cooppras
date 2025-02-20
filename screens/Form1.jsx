import { StyleSheet, Text, SafeAreaView,StatusBar,View,Alert } from 'react-native'
import React, {useState,useEffect,useContext} from 'react'
import InputField from '../components/InputField'
import { cores } from '../styles/cores'
import { CooperadoContext } from '../contexts/CooperadoContext'
import Botao from '../components/reusable/Botao'

const insertPhoneMask = (phone) => {

  const noMask = phone.replace(/\D/g, '');
  const { length } = noMask;
  if (length <= 11) {
    return noMask
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(length === 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/, '$1-$2');
  }
  return phone;

}

const insertCpfMask = (value) => {
 // Remove tudo que não for número
 value = value.replace(/\D/g, "");
 // Aplica a máscara
 value = value.replace(/(\d{3})(\d)/, "$1.$2");
 value = value.replace(/(\d{3})(\d)/, "$1.$2");
 value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
 return value
}

const Form1 = ({navigation}) => {
  const {nomeGlobal,cpfGlobal,telefoneGlobal,setNomeGlobal,setTelefoneGlobal,setCpfGlobal} = useContext(CooperadoContext);
  const [nome,setNome] = useState(nomeGlobal);
  const [cpf,setCpf] = useState(cpfGlobal);
  const [telefone,setTelefone] = useState(telefoneGlobal);
  


  useEffect(() => {
    setTelefone(insertPhoneMask(telefone));
 }, [telefone]);

 useEffect(() => {
  setCpf(insertCpfMask(cpf));
}, [cpf]);


const saveData = () => {

  if(nome.trim().length===0){
    Alert.alert("Erro", "Informe o nome por favor.");
    return
  }
  if(nome.trim().length===0){
    Alert.alert("Erro", "Informe o cpf por favor.");
    return
  }
  if(nome.trim().length===0){
    Alert.alert("Erro", "Informe o telefone por favor.");
    return
  }
  setNomeGlobal(nome);
  setCpfGlobal(cpf);
  setTelefoneGlobal(telefone);
  navigation.goBack();
}

  return (
    <View style={styles.container}>
        <StatusBar animated={true} backgroundColor={'#fff'} barStyle="dark-content"/>
      <InputField 
            label={'Nome:'} 
            placeholder={'Informe o nome do cooperado'} 
            value={nome} 
            onChangeText={t=>setNome(t)} 
            password={false} 
            keyboard={'default'}
         />
         <InputField 
            label={'CPF:'} 
            placeholder={'Informe o cpf do cooperado'} 
            value={cpf} 
            onChangeText={t=>setCpf(t)} 
            password={false} 
            keyboard={'number-pad'}
         />
          <InputField 
            label={'Telefone:'} 
            placeholder={'Informe o telefone do cooperado'} 
            value={telefone} 
            onChangeText={t=>setTelefone(t)} 
            password={false} 
            keyboard={'number-pad'}
         />
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

export default Form1

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,
    paddingHorizontal:20
  }
})
import { StyleSheet, Text, SafeAreaView,StatusBar,View, KeyboardAvoidingView,Platform, ScrollView } from 'react-native'
import React, {useState,useEffect} from 'react'
import InputField from '../components/InputField'
import SelectInput from '../components/SelectInput';
import { cidades } from '../data/data';
import MyInput from '../components/MyInput';
import FormInput from '../components/FormInput';
  
const insertCepMask = (value) => {
  
  value = value.replace(/\D/g, "");
  
  if (value.length > 5) {
    value = value.substring(0, 5) + "-" + value.substring(5, 8);
  }
  return value
 }
  

const Form2 = () => {
    const [nomeImovel,setNomeImovel] = useState('');
    const [areaTotal,setAreaTotal] = useState('');
    const [regiao,setRegiao] = useState('');
    const [distanciaSede,setDistanciaSede] = useState('');
    const [coordGeo,setCoordGeo] = useState('');
    const [municipio,setMunicipio] = useState('');
    const [cep,setCep] = useState('');
    const [nome,setNome] = useState('');

useEffect(() => {
  setCep(insertCepMask(cep));
}, [cep]);


  return (
     <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor={'#fff'} barStyle="dark-content"/>
            <ScrollView showsVerticalScrollIndicator={false}>
              
                <FormInput label={'Nome:'} value={nomeImovel} onChangeText={t=>setNomeImovel(t)} placeholder="Informe o nome do imóvel"/>
                <FormInput label={'Área Total:'} value={areaTotal} onChangeText={t=>setAreaTotal(t)}placeholder={'Informe a área total do imóvel'} keyboardType={'number-pad'}/>
                <FormInput  label={'Região:'} value={regiao} onChangeText={t=>setRegiao(t)} placeholder={'Informe a região do imóvel'}/>
                <FormInput label={'Distância da Sede (km):'}  value={distanciaSede} onChangeText={t=>setDistanciaSede(t)} placeholder={'Informe a distância entre o imóvel e a sede'} keyboardType={'number-pad'}/>
                <FormInput  label={'Coordenadas geográficas:'}  value={coordGeo} onChangeText={t=>setCoordGeo(t)} placeholder={'Informe a latitude e longitude do imóvel'}/>
                <SelectInput label={'Município:'} placeholder={'Selecione o Município'} modalTitle={'Selecione o Município'} options={cidades} onChangeSelect={setMunicipio}/>
                <FormInput keyboardType='number-pad' label={'CEP:'} value={cep} onChangeText={t=>setCep(t)} placeholder="Informe o CEP do imóvel"/>
             
           
            </ScrollView>
        </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Form2

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:5,
        paddingHorizontal:20
      },
      inner: {
        paddingBottom: 24,
        flex: 1,
        justifyContent: "flex-end",
    },
})
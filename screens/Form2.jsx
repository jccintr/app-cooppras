import { StyleSheet, Text, SafeAreaView,StatusBar,View, KeyboardAvoidingView,Platform } from 'react-native'
import React, {useState,useEffect} from 'react'
import InputField from '../components/InputField'
import SelectInput from '../components/SelectInput';
import { cidades } from '../data/data';
  
const insertCepMask = (value) => {
  
  value = value.replace(/\D/g, "");
  
  if (value.length > 5) {
    value = value.substring(0, 5) + "-" + value.substring(5, 8);
  }
  return value
 }
  

const Form2 = () => {
    const [nomeImovel,setNomeImovel] = useState('');
    const [areaTotal,setAreaTotal] = useState(0);
    const [regiao,setRegiao] = useState('');
    const [distanciaSede,setDistanciaSede] = useState(0);
    const [coordGeo,setCoordGeo] = useState('');
    const [municipio,setMunicipio] = useState('');
    const [cep,setCep] = useState('');

useEffect(() => {
  setCep(insertCepMask(cep));
}, [cep]);


  return (
     <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : null} style={{flex:1}}>
      <SafeAreaView style={styles.container}>
         <View style={styles.inner}>
            <StatusBar animated={true} backgroundColor={'#fff'} barStyle="dark-content"/>
            <InputField 
                label={'Nome:'} 
                placeholder={'Informe o nome do imóvel'} 
                value={nomeImovel} 
                onChangeText={t=>setNomeImovel(t)} 
                password={false} 
                keyboard={'default'}
            />
            <InputField 
                label={'Área Total:'} 
                placeholder={'Informe a área total do imóvel'} 
                value={areaTotal} 
                onChangeText={t=>setAreaTotal(t)} 
                password={false} 
                keyboard={'number-pad'}
            />
            <InputField 
                label={'Região:'} 
                placeholder={'Informe a região do imóvel'} 
                value={regiao} 
                onChangeText={t=>setRegiao(t)} 
                password={false} 
                keyboard={'default'}
            />
            <InputField 
                label={'Distância da Sede (km):'} 
                placeholder={'Informe a distância entre o imóvel e a sede'} 
                value={distanciaSede} 
                onChangeText={t=>setDistanciaSede(t)} 
                password={false} 
                keyboard={'number-pad'}
            />
            <InputField 
                label={'Coordenadas geográficas:'} 
                placeholder={'Informe a latitude e longitude do imóvel'} 
                value={coordGeo} 
                onChangeText={t=>setCoordGeo(t)} 
                password={false} 
                keyboard={'default'}
            />
            <SelectInput label={'Município:'} placeholder={'Selecione o Município'} modalTitle={'Selecione o Município'} options={cidades} onChangeSelect={setMunicipio}/>
            <InputField 
                label={'CEP:'} 
                placeholder={'Informe o CEP do imóvel'} 
                value={cep} 
                onChangeText={t=>setCep(t)} 
                password={false} 
                keyboard={'number-pad'}
            />
            </View>
         </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Form2

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        paddingHorizontal:20
      },
      inner: {
        paddingBottom: 24,
        flex: 1,
        justifyContent: "flex-end",
    },
})
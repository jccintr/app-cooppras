import { StyleSheet, Text, SafeAreaView,StatusBar,View, KeyboardAvoidingView,Platform, ScrollView,Alert } from 'react-native'
import React, {useState,useEffect,useContext} from 'react'
import SelectInput from '../components/SelectInput';
import { cidades,naturezaOcupacao } from '../data/data';
import Botao from '../components/reusable/Botao';
import FormInput from '../components/FormInput';
import { DadosContext } from '../contexts/DadosContext';
import { cores } from '../styles/cores';
  
const insertCepMask = (value) => {
  
  value = value.replace(/\D/g, "");
  
  if (value.length > 5) {
    value = value.substring(0, 5) + "-" + value.substring(5, 8);
  }
  return value
 }
  

const Form2 = ({navigation}) => {
    const {nomeImovelGlobal,setNomeImovelGlobal,areaTotalClobal,setAreaTotalGlobal,regiaoGlobal,setRegiaoGlobal} = useContext(DadosContext);
    const {distanciaSedeGlobal,setDistanciaSedeGlobal,coordGeoGlobal,setCoordGeoGlobal,municipioGlobal,setMunicipioGlobal} = useContext(DadosContext);
    const {cepGlobal,setCepGlobal,natOcupacaoGlobal,setNatOcupacaoGlobal,incraGlobal,setIncraGlobal,nirfGlobal,setNirfGlobal} = useContext(DadosContext);

    const [nomeImovel,setNomeImovel] = useState(nomeImovelGlobal);
    const [areaTotal,setAreaTotal] = useState(areaTotalClobal);
    const [regiao,setRegiao] = useState(regiaoGlobal);
    const [distanciaSede,setDistanciaSede] = useState(distanciaSedeGlobal);
    const [coordGeo,setCoordGeo] = useState(coordGeoGlobal);
    const [municipio,setMunicipio] = useState(municipioGlobal);
    const [cep,setCep] = useState(cepGlobal);
    const [natOcupacao,setNatOcupacao] = useState(natOcupacaoGlobal);
    const [incra,setIncra] = useState(incraGlobal);
    const [nirf,setNirf] = useState(nirfGlobal);

useEffect(() => {
  setCep(insertCepMask(cep));
}, [cep]);

const saveData = () => {

  if(nomeImovel.trim().length===0){
    Alert.alert("Erro", "Informe o nome do imóvel por favor.");
    return
  }123456
  if(areaTotal.trim().length===0 || parseFloat(areaTotal)===0.0){
    Alert.alert("Erro", "Informe a área do imóvel por favor.");
    return
  }
  if(regiao.trim().length===0){
    Alert.alert("Erro", "Informe a região do imóvel por favor.");
    return
  }
  if(distanciaSede.trim().length===0 || parseFloat(distanciaSede)===0.0){
    Alert.alert("Erro", "Informe a distância da sede por favor.");
    return
  }
  if(municipio.trim().length===0){
    Alert.alert("Erro", "Selecione o município por favor.");
    return
  }
  if(cep.trim().length===0){
    Alert.alert("Erro", "Informe cep do imóvel por favor.");
    return
  }
  if(natOcupacao.trim().length===0){
    Alert.alert("Erro", "Selecione a natureza da ocupação por favor.");
    return
  }
  if(incra.trim().length===0){
    Alert.alert("Erro", "Informe incra do imóvel por favor.");
    return
  }
  if(nirf.trim().length===0){
    Alert.alert("Erro", "Informe nirf do imóvel por favor.");
    return
  }
  setNomeImovelGlobal(nomeImovel);
  setAreaTotalGlobal(areaTotal);
  setRegiaoGlobal(regiao);
  setDistanciaSedeGlobal(distanciaSede);
  setCoordGeoGlobal(coordGeoGlobal)
  setMunicipioGlobal(municipio);
  setCepGlobal(cep);
  setNatOcupacaoGlobal(natOcupacao);
  setIncraGlobal(incra);
  setNirfGlobal(nirf);
  
  navigation.goBack();
}


  return (
    
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor={'#fff'} barStyle="dark-content"/>
            <ScrollView showsVerticalScrollIndicator={false}>
              
                <FormInput label={'Nome:'} value={nomeImovel} onChangeText={t=>setNomeImovel(t)} placeholder="Informe o nome do imóvel"/>
                <FormInput label={'Área Total:'} value={areaTotal} onChangeText={t=>setAreaTotal(t)}placeholder={'Informe a área total do imóvel'} keyboardType={'number-pad'}/>
                <FormInput  label={'Região:'} value={regiao} onChangeText={t=>setRegiao(t)} placeholder={'Informe a região do imóvel'}/>
                <FormInput label={'Distância da Sede (km):'}  value={distanciaSede} onChangeText={t=>setDistanciaSede(t)} placeholder={'Informe a distância entre o imóvel e a sede'} keyboardType={'number-pad'}/>
                <FormInput  label={'Coordenadas geográficas:'}  value={coordGeo} onChangeText={t=>setCoordGeo(t)} placeholder={'Informe a latitude e longitude do imóvel'}/>
                <SelectInput value={municipio} label={'Município:'} placeholder={'Selecione o Município'} modalTitle={'Selecione o Município'} options={cidades} onChangeSelect={setMunicipio}/>
                <FormInput keyboardType='number-pad' label={'CEP:'} value={cep} onChangeText={t=>setCep(t)} placeholder="Informe o CEP do imóvel"/>
                <SelectInput value={natOcupacao} label={'Natureza da Ocupação:'} placeholder={'Selecione a natureza da ocupação'} modalTitle={'Selecione a natureza da ocupação'} options={naturezaOcupacao} onChangeSelect={setNatOcupacao}/>
                <FormInput label={'INCRA Nº:'} value={incra} onChangeText={t=>setIncra(t)}placeholder={'Informe o núemro do INCRA'} keyboardType={'number-pad'}/>
                <FormInput label={'NIRF Nº:'} value={nirf} onChangeText={t=>setNirf(t)}placeholder={'Informe o número do NIRF'} keyboardType={'number-pad'}/>
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

export default Form2

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:5,
        paddingHorizontal:20,
        paddingBottom:20,
      },
      inner: {
        paddingBottom: 24,
        flex: 1,
        justifyContent: "flex-end",
    },
})
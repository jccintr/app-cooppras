import { StyleSheet, Text, SafeAreaView,StatusBar,ScrollView,Alert } from 'react-native'
import React, {useState,useContext} from 'react'
import FormInput from '../components/FormInput';
import YesNoInput from '../components/YesNoInput';
import { voltagens } from '../data/data';
import SelectInput from '../components/SelectInput';
import { DetalhesContext } from '../contexts/DetalhesContext';
import Botao from '../components/reusable/Botao';
import { cores } from '../styles/cores';
  
  

const Form3 = ({navigation}) => {
    const {isCarGlobal,setIsCarGlobal,areaTotalConsolidadaGlobal,setAreaTotalConsolidadaGlobal,areaReservaLegalGlobal,setAreaReservaLegalGlobal,areaReconhecidaAppGlobal,setAreaReconhecidaAppGlobal} = useContext(DetalhesContext);
    const {areaLitigioGlobal,setAreaLitigioGlobal,fonteAguaPotavelGlobal,setFonteAguaPotavelGlobal,possuiRioGlobal,setPossuiRioGlobal,possuiRepresaGlobal,setPossuiRepresaGlobal} = useContext(DetalhesContext);
    const {areaRepresaGlobal,setAreaRepresaGlobal,possuiFonteEnergiaGlobal,setPossuiFonteEnergiaGlobal,voltagemGlobal,setVoltagemGlobal,pastagemNativaGlobal,setPastagemNativaGlobal} = useContext(DetalhesContext);
    const {pastagemCultivadaGlobal,setPastagemCultivadaGlobal,areaPastagemCultivadaGlobal,setAreaPastagemCultivadaGlobal,cercado1AreaGlobal,setCercado1AreaGlobal,cercado1FinalidadeGlobal,setCercado1FinalidadeGlobal} = useContext(DetalhesContext);
    const {cercado2AreaGlobal,setCercado2AreaGlobal,cercado2FinalidadeGlobal,setCercado2FinalidadeGlobal,outrasAreasGlobal,setOutrasAreasGlobal,familiasTrabalhandoGlobal,setFamiliasTrabalhandoGlobal,familiasHabitandoGlobal,setFamiliasHabitandoGlobal} = useContext(DetalhesContext);
    
    const [isCar,setIsCar] = useState(isCarGlobal);
    const [areaTotalConsolidada,setAreaTotalConsolidada] = useState(areaTotalConsolidadaGlobal);
    const [areaReservaLegal,setAreaReservaLegal] = useState(areaReconhecidaAppGlobal);
    const [areaReconhecidaApp,setAreaReconhecidaApp] = useState(areaReconhecidaAppGlobal);
    const [areaLitigio,setAreaLitigio] = useState(areaLitigioGlobal);
    const [fonteAguaPotavel,setFonteAguaPotavel] = useState(fonteAguaPotavelGlobal);
    const [possuiRio,setPossuiRio] = useState(possuiRepresaGlobal);
    const [possuiRepresa,setPossuiRepresa] = useState(possuiRepresaGlobal);
    const [areaRepresa,setAreaRepresa] = useState(areaRepresaGlobal);
    const [possuiFonteEnergia,setPossuiFonteEnergia] = useState(possuiFonteEnergiaGlobal);
    const [voltagem,setVoltagem] = useState(voltagemGlobal);
    const [pastagemNativa,setPastagemNativa] = useState(pastagemNativaGlobal);
    const [pastagemCultivada,setPastagemCultivada] = useState(pastagemCultivadaGlobal);
    const [areaPastagemCultivada,setAreaPastagemCultivada] = useState(areaPastagemCultivadaGlobal);
    const [cercado1Area,setCercado1Area] = useState(cercado1AreaGlobal);
    const [cercado1Finalidade,setCercado1Finalidade] = useState(cercado1FinalidadeGlobal);
    const [cercado2Area,setCercado2Area] = useState(cercado2AreaGlobal);
    const [cercado2Finalidade,setCercado2Finalidade] = useState(cercado2FinalidadeGlobal);
    const [outrasAreas,setOutrasAreas] = useState(outrasAreasGlobal);
    const [familiasTrabalhando,setFamiliasTrabalhando] = useState(familiasTrabalhandoGlobal);
    const [familiasHabitando,setFamiliasHabitando] = useState(familiasHabitandoGlobal);


    const saveData = () => {

      if(areaTotalConsolidada.trim().length===0 || parseFloat(areaTotalConsolidada)===0.0){
        Alert.alert("Erro", "Informe a área consolidada do imóvel por favor.");
        return
      }
    
      if(possuiRepresa && (areaRepresa.trim().length===0 || parseFloat(areaRepresa)===0.0)){
        Alert.alert("Erro", "Informe a área da represa por favor.");
        return
      }

      if(possuiFonteEnergia && (voltagem.trim().length===0)){
        Alert.alert("Erro", "Informe a voltagem por favor.");
        return
      }

      if(familiasTrabalhando.trim().length===0 || parseFloat(familiasTrabalhando)===0.0){
        Alert.alert("Erro", "Informe o número de famílias trabalhando por favor.");
        return
      }

      if(familiasHabitando.trim().length===0 || parseFloat(familiasHabitando)===0.0){
        Alert.alert("Erro", "Informe o número de famílias trabalhando por favor.");
        return
      }
     
      setIsCarGlobal(isCar);
      setAreaTotalConsolidadaGlobal(areaTotalConsolidada);
      setAreaReservaLegalGlobal(areaReservaLegal);
      setAreaReconhecidaAppGlobal(areaReconhecidaApp);
      setAreaLitigioGlobal(areaLitigio);
      setFonteAguaPotavelGlobal(fonteAguaPotavel);
      setPossuiRioGlobal(possuiRio);
      setPossuiRepresaGlobal(possuiRepresa);
      setAreaRepresaGlobal(areaRepresa);
      setPossuiFonteEnergiaGlobal(possuiFonteEnergia);
      setVoltagemGlobal(voltagem);
      setPastagemNativaGlobal(pastagemNativa);
      setPastagemCultivadaGlobal(pastagemCultivada)
      setAreaPastagemCultivadaGlobal(areaPastagemCultivada)
      setCercado1AreaGlobal(cercado1Area);
      setCercado1FinalidadeGlobal(cercado1Finalidade);
      setCercado2AreaGlobal(cercado2Area);
      setCercado2FinalidadeGlobal(cercado2Finalidade);
      setOutrasAreasGlobal(outrasAreas);
      setFamiliasTrabalhandoGlobal(familiasTrabalhando);
      setFamiliasHabitandoGlobal(familiasHabitando);
      
      
      navigation.goBack();
    }
    


  return (
    
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor={'#fff'} barStyle="dark-content"/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <YesNoInput question={'Cadastro Ambiental Rural (CAR) ?'} value={isCar} setValue={setIsCar}/>
            <FormInput label={'Área total consolidada:'} value={areaTotalConsolidada} onChangeText={t=>setAreaTotalConsolidada(t)} placeholder="Informe a área consolidada do imóvel" keyboardType={'number-pad'}/>
            <FormInput label={'Área de reserva legal:'} value={areaReservaLegal} onChangeText={t=>setAreaReservaLegal(t)} placeholder="Informe a área de reserva legal" keyboardType={'number-pad'}/>
            <FormInput label={'Área reconhecida com APP:'} value={areaReconhecidaApp} onChangeText={t=>setAreaReconhecidaApp(t)} placeholder="Informe a área reconhecida com APP" keyboardType={'number-pad'}/>
            <FormInput label={'Área de litígio:'} value={areaLitigio} onChangeText={t=>setAreaLitigio(t)} placeholder="Informe a área de litígio" keyboardType={'number-pad'}/>
            <YesNoInput question={'Possui fonte de água potável ?'} value={fonteAguaPotavel} setValue={setFonteAguaPotavel}/>
            <YesNoInput question={'Possui rio ou riacho ?'} value={possuiRio} setValue={setPossuiRio}/>
            <YesNoInput question={'Possui represa ou açude ?'} value={possuiRepresa} setValue={setPossuiRepresa}/>
            {possuiRepresa&&<FormInput label={'Área da represa ou açude:'} value={areaRepresa} onChangeText={t=>setAreaRepresa(t)} placeholder="Informe a área da represa ou açude" keyboardType={'number-pad'}/>}
            <YesNoInput question={'Possui fonte de energia ?'} value={possuiFonteEnergia} setValue={setPossuiFonteEnergia}/>
            {possuiFonteEnergia&&<SelectInput label={'Voltagem:'} placeholder={'Selecione a voltagem da fonte de energia'} modalTitle={'Selecione a voltagem'} options={voltagens} onChangeSelect={setVoltagem}/>}
           
            
           
            <FormInput label={'Pastagem nativa predominante:'} value={pastagemNativa} onChangeText={t=>setPastagemNativa(t)} placeholder="Informe o tipo de pastagem predominante"/>
            
            <FormInput label={'Pastagem cultivada:'} value={pastagemCultivada} onChangeText={t=>setPastagemCultivada(t)} placeholder="Informe o tipo de pastagem cultivada"/>
            <FormInput label={'Área Pastagem cultivada:'} keyboardType={'number-pad'} value={areaPastagemCultivada} onChangeText={t=>setAreaPastagemCultivada(t)} placeholder="Informe a área da pastagem cultivada"/>
            <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center'}}>Cercado 1</Text>
            <FormInput label={'Área:'} value={cercado1Area} onChangeText={t=>setCercado1Area(t)} placeholder="Informe a área do cercado 1" keyboardType={'number-pad'}/>
            <FormInput label={'Finalidade:'} value={cercado1Finalidade} onChangeText={t=>setCercado1Finalidade(t)} placeholder="Informe a finalidade do cercado 1"/>
            <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center'}}>Cercado 2</Text>
            <FormInput label={'Área:'} value={cercado2Area} onChangeText={t=>setCercado2Area(t)} placeholder="Informe a área do cercado 2" keyboardType={'number-pad'}/>
            <FormInput label={'Finalidade:'} value={cercado2Finalidade} onChangeText={t=>setCercado2Finalidade(t)} placeholder="Informe a finalidade do cercado 2"/>
           
            <FormInput label={'Outras áreas específicas:'} value={outrasAreas} onChangeText={t=>setOutrasAreas(t)} placeholder="Informe as outras áreas" keyboardType={'number-pad'}/>
            <FormInput label={'Número de famílias trabalhando:'} value={familiasTrabalhando} onChangeText={t=>setFamiliasTrabalhando(t)} placeholder="Informe a quantidade de famílias trabalhando" keyboardType={'number-pad'}/>
            <FormInput label={'Número de famílias habitando:'} value={familiasHabitando} onChangeText={t=>setFamiliasHabitando(t)} placeholder="Informe a quantidade de famílias habitando" keyboardType={'number-pad'}/>
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

export default Form3

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
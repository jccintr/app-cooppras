import { StyleSheet, Text, SafeAreaView,StatusBar,View, KeyboardAvoidingView,Platform, ScrollView } from 'react-native'
import React, {useState,useEffect} from 'react'
import FormInput from '../components/FormInput';
import YesNoInput from '../components/YesNoInput';
import { voltagens } from '../data/data';
import SelectInput from '../components/SelectInput';
  
  

const Form3 = () => {
    const [isCar,setIsCar] = useState(false);
    const [areaTotalConsolidada,setAreaTotalConsolidada] = useState('');
    const [areaReservaLegal,setAreaReservaLegal] = useState('');
    const [areaReconhecidaApp,setAreaReconhecidaApp] = useState('');
    const [areaLitigio,setAreaLitigio] = useState('');
    const [fonteAguaPotavel,setFonteAguaPotavel] = useState(false);
    const [possuiRio,setPossuiRio] = useState(false);
    const [possuiRepresa,setPossuiRepresa] = useState(false);
    const [areaRepresa,setareaRepresa] = useState('');
    const [possuiFonteEnergia,setPossuiFonteEnergia] = useState(false);
    const [voltagem,setVoltagem] = useState('');
    const [pastagemNativa,setPastagemNativa] = useState('');
    const [pastagemCultivada,setPastagemCultivada] = useState('');
    const [cercado1Area,setCercado1Area] = useState('');
    const [cercado1Finalidade,setCercado1Finalidade] = useState('');
    const [cercado2Area,setCercado2Area] = useState('');
    const [cercado2Finalidade,setCercado2Finalidade] = useState('');
   
    const [outrasAreas,setOutrasAreas] = useState('');
    const [familiasTrabalhando,setFamiliasTrabalhando] = useState('');
    const [familiasHabitando,setFamiliasHabitando] = useState('');



  return (
     <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>
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
            <FormInput label={'Pastagem cultivada:'} value={pastagemCultivada} onChangeText={t=>setPastagemCultivada(t)} placeholder="Informe o tipo de pastagem cultivada"/>
            <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center'}}>Cercado 1</Text>
            <FormInput label={'Área:'} value={cercado1Area} onChangeText={t=>setCercado1Area(t)} placeholder="Informe a área do cercado 1" keyboardType={'number-pad'}/>
            <FormInput label={'Finalidade:'} value={cercado1Finalidade} onChangeText={t=>setCercado1Finalidade(t)} placeholder="Informe a finalidade do cercado 1"/>
            <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center'}}>Cercado 2</Text>
            <FormInput label={'Área:'} value={cercado2Area} onChangeText={t=>setCercado2Area(t)} placeholder="Informe a área do cercado 2" keyboardType={'number-pad'}/>
            <FormInput label={'Finalidade:'} value={cercado2Finalidade} onChangeText={t=>setCercado2Finalidade(t)} placeholder="Informe a finalidade do cercado 2"/>
           
            <FormInput label={'Outras áreas específicas:'} value={outrasAreas} onChangeText={t=>setOutrasAreas(t)} placeholder="Informe as outras áreas" keyboardType={'number-pad'}/>
            <FormInput label={'Número de famílias trabalhando:'} value={familiasTrabalhando} onChangeText={t=>setFamiliasTrabalhando(t)} placeholder="Informe a quantidade de famílias trabalhando" keyboardType={'number-pad'}/>
            <FormInput label={'Número de famílias habitando:'} value={familiasHabitando} onChangeText={t=>setFamiliasHabitando(t)} placeholder="Informe a quantidade de famílias habitando" keyboardType={'number-pad'}/>
            </ScrollView>
        </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Form3

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
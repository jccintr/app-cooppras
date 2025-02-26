import { StyleSheet,StatusBar,View,Platform } from 'react-native';
import React, {useState,useContext} from 'react';
import Botao from '../components/reusable/Botao';
import HeightSpacer from '../components/reusable/HeightSpacer';
import { cores } from '../styles/cores';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import { htmlTopo,htmlFooter, htmlCooperado, htmlDadosPropriedade, htmlDetalhesPropriedade,htmlDetalhesPropriedade2, htmlDocTitle, htmlPageHeader, htmlRebanhoCaprinos, htmlRebanhoOvinos, htmlBoletimProdudaoAnual, htmlDemaisProducao, htmlDoencas, htmlInsumos, htmlLocal } from '../util/html';
import { CooperadoContext } from '../contexts/CooperadoContext';
import { DadosContext } from '../contexts/DadosContext';
import { DetalhesContext } from '../contexts/DetalhesContext';
import { TableContext } from '../contexts/TableContext';
import { LocalContext } from '../contexts/LocalContext';
import { manipulateAsync } from 'expo-image-manipulator';
import { Asset } from 'expo-asset';


const Etapas = ({navigation}) => {
    const  {nomeGlobal,cpfGlobal,telefoneGlobal} = useContext(CooperadoContext);

    const {nomeImovelGlobal,areaTotalClobal,regiaoGlobal} = useContext(DadosContext);
    const {distanciaSedeGlobal,coordGeoGlobal,municipioGlobal} = useContext(DadosContext);
    const {cepGlobal,natOcupacaoGlobal,incraGlobal,nirfGlobal} = useContext(DadosContext);
    const {proprietarioGlobal,cpfProprietarioGlobal,telefoneProprietarioGlobal} = useContext(DadosContext);

    const {isCarGlobal,areaTotalConsolidadaGlobal,areaReservaLegalGlobal,areaReconhecidaAppGlobal} = useContext(DetalhesContext);
    const {areaLitigioGlobal,fonteAguaPotavelGlobal,possuiRioGlobal,possuiRepresaGlobal} = useContext(DetalhesContext);
    const {areaRepresaGlobal,possuiFonteEnergiaGlobal,voltagemGlobal,pastagemNativaGlobal} = useContext(DetalhesContext);
    const {pastagemCultivadaGlobal,areaPastagemCultivadaGlobal,cercado1AreaGlobal,cercado1FinalidadeGlobal} = useContext(DetalhesContext);
    const {cercado2AreaGlobal,cercado2FinalidadeGlobal,outrasAreasGlobal,familiasTrabalhandoGlobal,familiasHabitandoGlobal} = useContext(DetalhesContext);
        
    const {caprinosGlobal,ovinosGlobal,producaoAnualGlobal,demaisProducaoGlobal,doencas,insumos,racaPredominanteGlobal,sistemaConfinamentoGlobal} = useContext(TableContext);
    const {dataVisitaGlobal,localGlobal,tecnicoGlobal,anotacoesGlobal} = useContext(LocalContext);

    const [isLoading,setIsLoading] = useState(false);
   

const criaPdf = async () => {
  const asset = Asset.fromModule(require('../assets/logo-pdf.png'));
  const image = await manipulateAsync(asset.localUri ?? asset.uri, [], { base64: true });

  let htmlContent = htmlTopo();
  htmlContent += htmlPageHeader(image,"1");
  htmlContent += htmlDocTitle();
  htmlContent += htmlCooperado(nomeGlobal,cpfGlobal,telefoneGlobal);
  htmlContent += htmlDadosPropriedade(nomeImovelGlobal,areaTotalClobal,regiaoGlobal,distanciaSedeGlobal,coordGeoGlobal,municipioGlobal,cepGlobal,natOcupacaoGlobal,incraGlobal,nirfGlobal,proprietarioGlobal,cpfProprietarioGlobal,telefoneProprietarioGlobal);
  //htmlContent += htmlPageHeader(image,"2");
  htmlContent += htmlDetalhesPropriedade(isCarGlobal,areaTotalConsolidadaGlobal,areaReservaLegalGlobal,areaReconhecidaAppGlobal,
    areaLitigioGlobal,fonteAguaPotavelGlobal,possuiRioGlobal,possuiRepresaGlobal,
    areaRepresaGlobal,possuiFonteEnergiaGlobal,voltagemGlobal);
    htmlContent += htmlPageHeader(image,"2");
    htmlContent += htmlDetalhesPropriedade2(pastagemNativaGlobal,pastagemCultivadaGlobal,areaPastagemCultivadaGlobal,cercado1AreaGlobal,cercado1FinalidadeGlobal,
      cercado2AreaGlobal,cercado2FinalidadeGlobal,outrasAreasGlobal,familiasTrabalhandoGlobal,familiasHabitandoGlobal);
  htmlContent += htmlRebanhoCaprinos(caprinosGlobal);
  htmlContent += htmlPageHeader(image,"3");
  htmlContent += htmlRebanhoOvinos(ovinosGlobal,racaPredominanteGlobal,sistemaConfinamentoGlobal);
  htmlContent += htmlBoletimProdudaoAnual(producaoAnualGlobal);
  htmlContent += htmlPageHeader(image,"4");
  htmlContent += htmlDemaisProducao(demaisProducaoGlobal);
  htmlContent += htmlDoencas(doencas);
  htmlContent += htmlInsumos(insumos);
  htmlContent += htmlLocal(dataVisitaGlobal,localGlobal,tecnicoGlobal,anotacoesGlobal);
  htmlContent += htmlFooter();
  const fileName = 'formulario-agropecuario.pdf';
     const file = await printToFileAsync({html:htmlContent,base64:false,width:595,height:842});
     
    // await shareAsync(file.uri);
    save(file.uri,fileName,'application/pdf');
}

const save = async (uri, filename, mimetype) => {
  if (Platform.OS === "android") {
    const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
    if (permissions.granted) {
      const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
      await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, filename, mimetype)
        .then(async (uri) => {
          await FileSystem.writeAsStringAsync(uri, base64, { encoding: FileSystem.EncodingType.Base64 });
        })
        .catch(e => console.log(e));
    } else {
      shareAsync(uri);
    }
  } else {
    shareAsync(uri);
  }
};

  return (
     <View style={styles.container}>
        <StatusBar animated={true} backgroundColor={'#fff'} barStyle="dark-content"/>
         <Botao 
            onPress={()=>navigation.navigate('form1')} 
            text={'Dados do Cooperado'} 
            textSize={16} 
            textColor={cores.white} 
            width={'100%'} 
            backgroundColor={cores.primary} 
            borderWidth={0} 
            borderRadius={10} 
            isLoading={isLoading}
        />
        <HeightSpacer h={20}/>
        <Botao 
            onPress={()=>navigation.navigate('form2')} 
            text={'Dados da Propriedade'} 
            textSize={16} 
            textColor={cores.white} 
            width={'100%'} 
            backgroundColor={cores.primary} 
            borderWidth={0} 
            borderRadius={10} 
            isLoading={isLoading}
        />
        <HeightSpacer h={20}/>
        <Botao 
            onPress={()=>navigation.navigate('form3')} 
            text={'Carecterísticas da Propriedade'} 
            textSize={16} 
            textColor={cores.white} 
            width={'100%'} 
            backgroundColor={cores.primary} 
            borderWidth={0} 
            borderRadius={10} 
            isLoading={isLoading}
        />
         <HeightSpacer h={20}/>
        <Botao 
            onPress={()=>navigation.navigate('infoAgro')} 
            text={'Informações Agropecuárias'} 
            textSize={16} 
            textColor={cores.white} 
            width={'100%'} 
            backgroundColor={cores.primary} 
            borderWidth={0} 
            borderRadius={10} 
            isLoading={isLoading}
        />
         <HeightSpacer h={20}/>
         <Botao 
            onPress={()=>navigation.navigate('local')} 
            text={'Local e Data'} 
            textSize={16} 
            textColor={cores.white} 
            width={'100%'} 
            backgroundColor={cores.primary} 
            borderWidth={0} 
            borderRadius={10} 
            isLoading={isLoading}
        />
         <HeightSpacer h={20}/>
         <Botao 
            onPress={()=>navigation.navigate('anotacoes')} 
            text={'Anotações'} 
            textSize={16} 
            textColor={cores.white} 
            width={'100%'} 
            backgroundColor={cores.primary} 
            borderWidth={0} 
            borderRadius={10} 
            isLoading={isLoading}
        />
         <HeightSpacer h={20}/>
        <Botao 
            onPress={()=>criaPdf()} 
            text={'Gerar PDF'} 
            textSize={16} 
            textColor={cores.primary} 
            width={'100%'} 
            borderColor={cores.primary}
            backgroundColor={cores.whiteSmoke} 
            borderWidth={2} 
            borderRadius={10} 
            isLoading={isLoading}
        />
    </View>
  )
}

export default Etapas

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  
    paddingHorizontal:20
  }
})
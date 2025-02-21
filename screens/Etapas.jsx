import { StyleSheet,StatusBar,View,Platform } from 'react-native';
import React, {useState,useContext} from 'react';
import Botao from '../components/reusable/Botao';
import HeightSpacer from '../components/reusable/HeightSpacer';
import { cores } from '../styles/cores';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import { htmlHeader,htmlFooter, htmlCooperado, htmlDadosPropriedade, htmlDetalhesPropriedade } from '../util/html';
import { CooperadoContext } from '../contexts/CooperadoContext';
import { DadosContext } from '../contexts/DadosContext';
import { DetalhesContext } from '../contexts/DetalhesContext';


const Etapas = ({navigation}) => {
    const  {nomeGlobal,cpfGlobal,telefoneGlobal} = useContext(CooperadoContext);

    const {nomeImovelGlobal,areaTotalClobal,regiaoGlobal} = useContext(DadosContext);
    const {distanciaSedeGlobal,coordGeoGlobal,municipioGlobal} = useContext(DadosContext);
    const {cepGlobal,natOcupacaoGlobal,incraGlobal,nirfGlobal} = useContext(DadosContext);

    const {isCarGlobal,areaTotalConsolidadaGlobal,areaReservaLegalGlobal,areaReconhecidaAppGlobal} = useContext(DetalhesContext);
    const {areaLitigioGlobal,fonteAguaPotavelGlobal,possuiRioGlobal,possuiRepresaGlobal} = useContext(DetalhesContext);
    const {areaRepresaGlobal,possuiFonteEnergiaGlobal,voltagemGlobal,pastagemNativaGlobal} = useContext(DetalhesContext);
    const {pastagemCultivadaGlobal,areaPastagemCultivadaGlobal,cercado1AreaGlobal,cercado1FinalidadeGlobal} = useContext(DetalhesContext);
    const {cercado2AreaGlobal,cercado2FinalidadeGlobal,outrasAreasGlobal,familiasTrabalhandoGlobal,familiasHabitandoGlobal} = useContext(DetalhesContext);
        
    
    const [isLoading,setIsLoading] = useState(false);



const criaPdf = async () => {
  let htmlContent = htmlHeader() + htmlFooter() + htmlCooperado(nomeGlobal,cpfGlobal,telefoneGlobal);// + htmlDadosPropriedade(nomeImovelGlobal,areaTotalClobal,regiaoGlobal,distanciaSedeGlobal,coordGeoGlobal,municipioGlobal,cepGlobal,natOcupacaoGlobal,incraGlobal,nirfGlobal);
  htmlContent += htmlDadosPropriedade(nomeImovelGlobal,areaTotalClobal,regiaoGlobal,distanciaSedeGlobal,coordGeoGlobal,municipioGlobal,cepGlobal,natOcupacaoGlobal,incraGlobal,nirfGlobal);
  htmlContent += htmlDetalhesPropriedade(isCarGlobal,areaTotalConsolidadaGlobal,areaReservaLegalGlobal,areaReconhecidaAppGlobal,
    areaLitigioGlobal,fonteAguaPotavelGlobal,possuiRioGlobal,possuiRepresaGlobal,
    areaRepresaGlobal,possuiFonteEnergiaGlobal,voltagemGlobal,pastagemNativaGlobal,
    pastagemCultivadaGlobal,areaPastagemCultivadaGlobal,cercado1AreaGlobal,cercado1FinalidadeGlobal,
    cercado2AreaGlobal,cercado2FinalidadeGlobal,outrasAreasGlobal,familiasTrabalhandoGlobal,familiasHabitandoGlobal);
  const fileName = 'coopprass.pdf';
     const file = await printToFileAsync({html:htmlContent,base64:false,width:595,height:842});
     console.log('Paginas: '+file.numberOfPages);
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
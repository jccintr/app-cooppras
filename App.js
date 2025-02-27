import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import { CooperadoContext } from './contexts/CooperadoContext';
import { DadosContext } from './contexts/DadosContext';
import { DetalhesContext } from './contexts/DetalhesContext';
import { TableContext } from './contexts/TableContext';
import { LocalContext } from './contexts/LocalContext';

export default function App() {
   const [nomeGlobal,setNomeGlobal] = useState('');
   const [cpfGlobal,setCpfGlobal] = useState('');
   const [telefoneGlobal,setTelefoneGlobal] = useState('');
   // dados da propriedade
  const [nomeImovelGlobal,setNomeImovelGlobal] = useState('');
  const [areaTotalClobal,setAreaTotalGlobal] = useState('');
  const [regiaoGlobal,setRegiaoGlobal] = useState('');
  const [distanciaSedeGlobal,setDistanciaSedeGlobal] = useState('');
  const [coordGeoGlobal,setCoordGeoGlobal] = useState('');
  const [municipioGlobal,setMunicipioGlobal] = useState('');
  const [cepGlobal,setCepGlobal] = useState('');
  const [natOcupacaoGlobal,setNatOcupacaoGlobal] = useState('');
  const [incraGlobal,setIncraGlobal] = useState('');
  const [nirfGlobal,setNirfGlobal] = useState('');
  const [proprietarioGlobal,setProprietarioGlobal] = useState('');
  const [cpfProprietarioGlobal,setCpfProprietarioGlobal] = useState('');
  const [telefoneProprietarioGlobal,setTelefoneProprietarioGlobal] = useState('')
  // detalhes da propriedade
  const [isCarGlobal,setIsCarGlobal] = useState(false);
  const [areaTotalConsolidadaGlobal,setAreaTotalConsolidadaGlobal] = useState('');
  const [areaReservaLegalGlobal,setAreaReservaLegalGlobal] = useState('');
  const [areaReconhecidaAppGlobal,setAreaReconhecidaAppGlobal] = useState('');
  const [areaLitigioGlobal,setAreaLitigioGlobal] = useState('');
  const [fonteAguaPotavelGlobal,setFonteAguaPotavelGlobal] = useState(false);
  const [possuiRioGlobal,setPossuiRioGlobal] = useState(false);
  const [possuiRepresaGlobal,setPossuiRepresaGlobal] = useState(false);
  const [areaRepresaGlobal,setAreaRepresaGlobal] = useState('');
  const [possuiFonteEnergiaGlobal,setPossuiFonteEnergiaGlobal] = useState(false);
  const [voltagemGlobal,setVoltagemGlobal] = useState('');
  const [pastagemNativaGlobal,setPastagemNativaGlobal] = useState('');
  const [pastagemCultivadaGlobal,setPastagemCultivadaGlobal] = useState('');
  const [areaPastagemCultivadaGlobal,setAreaPastagemCultivadaGlobal] = useState('');
  const [cercado1AreaGlobal,setCercado1AreaGlobal] = useState('');
  const [cercado1FinalidadeGlobal,setCercado1FinalidadeGlobal] = useState('');
  const [cercado2AreaGlobal,setCercado2AreaGlobal] = useState('');
  const [cercado2FinalidadeGlobal,setCercado2FinalidadeGlobal] = useState('');
  const [outrasAreasGlobal,setOutrasAreasGlobal] = useState('');
  const [familiasTrabalhandoGlobal,setFamiliasTrabalhandoGlobal] = useState('');
  const [familiasHabitandoGlobal,setFamiliasHabitandoGlobal] = useState('');
  const [caprinosGlobal,setCaprinosGlobal] = useState([
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''}
  ]);
  const [ovinosGlobal,setOvinosGlobal] = useState([
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''}
  ]);
  const [racaPredominanteGlobal,setRacaPredominanteGlobal] = useState('');
  const [sistemaConfinamentoGlobal,setSistemaConfinamentoGlobal] = useState('');
  const [producaoAnualGlobal,setProducaoAnualGlobal] = useState([
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''}
  ]);
  const [demaisProducaoGlobal,setDemaisProducaoGlobal] = useState([
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''},
    {quant:'',peso:'',valor:''}
  ]);
  const [doencas,setDoencas] = useState([]);
  /*
  const [doencas,setDoencas] = useState([
    {id:1,tipo:'Gripe Aviária',periodo:'Jan a Fev',tratamento:'Rezar',medicacao:'rivotril'},
    {id:2,tipo:'Doença da Vaca Louca',periodo:'quaresma',tratamento:'orar',medicacao:'certralina'},
    {id:3,tipo:'Gripe Suina',periodo:'Julho',tratamento:'férias',medicacao:'cerveja'},
    {id:4,tipo:'Covid 19',periodo:'ano todo',tratamento:'ficar em casa',medicacao:'cloroquina'},
  ]);
  */
  const [insumos,setInsumos] = useState([]);
  /*
  const [insumos,setInsumos] = useState([
    {id:1,tipo:'Farelo de Milho',periodo:'dez',quant:'50',resultado:'sei lá'},
    {id:2,tipo:'Sal',periodo:'abril',quant:'20',resultado:'ótimo'},
    {id:3,tipo:'Feno',periodo:'fev',quant:'20',resultado:'bom'},
  ]);
  */
  const [dataVisitaGlobal,setDataVisitaGlobal] = useState('');
  const [localGlobal,setLocalGlobal] = useState('');
  const [tecnicoGlobal,setTecnicoGlobal] = useState('');
  const [anotacoesGlobal,setAnotacoesGlobal] = useState('');

  return (
   <CooperadoContext.Provider value={{nomeGlobal,setNomeGlobal,cpfGlobal,setCpfGlobal,telefoneGlobal,setTelefoneGlobal}}>
     <DadosContext.Provider value={{nomeImovelGlobal,setNomeImovelGlobal,areaTotalClobal,setAreaTotalGlobal,regiaoGlobal,setRegiaoGlobal,distanciaSedeGlobal,setDistanciaSedeGlobal,coordGeoGlobal,setCoordGeoGlobal,municipioGlobal,setMunicipioGlobal,cepGlobal,setCepGlobal,natOcupacaoGlobal,setNatOcupacaoGlobal,incraGlobal,setIncraGlobal,nirfGlobal,setNirfGlobal,proprietarioGlobal,setProprietarioGlobal,cpfProprietarioGlobal,setCpfProprietarioGlobal,telefoneProprietarioGlobal,setTelefoneProprietarioGlobal}}>
       <DetalhesContext.Provider value={{isCarGlobal,setIsCarGlobal,areaTotalConsolidadaGlobal,setAreaTotalConsolidadaGlobal,areaReservaLegalGlobal,setAreaReservaLegalGlobal,areaReconhecidaAppGlobal,setAreaReconhecidaAppGlobal,areaLitigioGlobal,setAreaLitigioGlobal,fonteAguaPotavelGlobal,setFonteAguaPotavelGlobal,possuiRioGlobal,setPossuiRioGlobal,possuiRepresaGlobal,setPossuiRepresaGlobal,areaRepresaGlobal,setAreaRepresaGlobal,possuiFonteEnergiaGlobal,setPossuiFonteEnergiaGlobal,voltagemGlobal,setVoltagemGlobal,pastagemNativaGlobal,setPastagemNativaGlobal,pastagemCultivadaGlobal,setPastagemCultivadaGlobal,areaPastagemCultivadaGlobal,setAreaPastagemCultivadaGlobal,cercado1AreaGlobal,setCercado1AreaGlobal,cercado1FinalidadeGlobal,setCercado1FinalidadeGlobal,cercado2AreaGlobal,setCercado2AreaGlobal,cercado2FinalidadeGlobal,setCercado2FinalidadeGlobal,outrasAreasGlobal,setOutrasAreasGlobal,familiasTrabalhandoGlobal,setFamiliasTrabalhandoGlobal,familiasHabitandoGlobal,setFamiliasHabitandoGlobal}}>
         <TableContext.Provider value={{caprinosGlobal,setCaprinosGlobal,ovinosGlobal,setOvinosGlobal,producaoAnualGlobal,setProducaoAnualGlobal,demaisProducaoGlobal,setDemaisProducaoGlobal,doencas,setDoencas,insumos,setInsumos,racaPredominanteGlobal,setRacaPredominanteGlobal,sistemaConfinamentoGlobal,setSistemaConfinamentoGlobal}}>
           <LocalContext.Provider value={{dataVisitaGlobal,setDataVisitaGlobal,localGlobal,setLocalGlobal,tecnicoGlobal,setTecnicoGlobal,anotacoesGlobal,setAnotacoesGlobal}}>
             <NavigationContainer>
               <StackNavigator/>
             </NavigationContainer>
           </LocalContext.Provider>
         </TableContext.Provider>
        </DetalhesContext.Provider>
      </DadosContext.Provider>
    </CooperadoContext.Provider>
  );
}

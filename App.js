import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import { CooperadoContext } from './contexts/CooperadoContext';
import { DadosContext } from './contexts/DadosContext';
import { DetalhesContext } from './contexts/DetalhesContext';
import { TableContext } from './contexts/TableContext';
import Doencas from './screens/Doencas';

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
  const [doencas,setDoencas] = useState([
    {id:1,tipo:'Gripe Aviária',perido:'',tratamento:'',medicacao:''},
    {id:2,tipo:'Doença da Vaca Louca',perido:'',tratamento:'',medicacao:''},
    {id:3,tipo:'Gripe Suina',perido:'',tratamento:'',medicacao:''},
    {id:4,tipo:'Covid 19',perido:'',tratamento:'',medicacao:''},
  ]);
  return (
   <CooperadoContext.Provider value={{nomeGlobal,setNomeGlobal,cpfGlobal,setCpfGlobal,telefoneGlobal,setTelefoneGlobal}}>
    <DadosContext.Provider value={{nomeImovelGlobal,setNomeImovelGlobal,areaTotalClobal,setAreaTotalGlobal,regiaoGlobal,setRegiaoGlobal,distanciaSedeGlobal,setDistanciaSedeGlobal,coordGeoGlobal,setCoordGeoGlobal,municipioGlobal,setMunicipioGlobal,cepGlobal,setCepGlobal,natOcupacaoGlobal,setNatOcupacaoGlobal,incraGlobal,setIncraGlobal,nirfGlobal,setNirfGlobal}}>
      <DetalhesContext.Provider value={{isCarGlobal,setIsCarGlobal,areaTotalConsolidadaGlobal,setAreaTotalConsolidadaGlobal,areaReservaLegalGlobal,setAreaReservaLegalGlobal,areaReconhecidaAppGlobal,setAreaReconhecidaAppGlobal,areaLitigioGlobal,setAreaLitigioGlobal,fonteAguaPotavelGlobal,setFonteAguaPotavelGlobal,possuiRioGlobal,setPossuiRioGlobal,possuiRepresaGlobal,setPossuiRepresaGlobal,areaRepresaGlobal,setAreaRepresaGlobal,possuiFonteEnergiaGlobal,setPossuiFonteEnergiaGlobal,voltagemGlobal,setVoltagemGlobal,pastagemNativaGlobal,setPastagemNativaGlobal,pastagemCultivadaGlobal,setPastagemCultivadaGlobal,areaPastagemCultivadaGlobal,setAreaPastagemCultivadaGlobal,cercado1AreaGlobal,setCercado1AreaGlobal,cercado1FinalidadeGlobal,setCercado1FinalidadeGlobal,cercado2AreaGlobal,setCercado2AreaGlobal,cercado2FinalidadeGlobal,setCercado2FinalidadeGlobal,outrasAreasGlobal,setOutrasAreasGlobal,familiasTrabalhandoGlobal,setFamiliasTrabalhandoGlobal,familiasHabitandoGlobal,setFamiliasHabitandoGlobal}}>
      <TableContext.Provider value={{caprinosGlobal,setCaprinosGlobal,ovinosGlobal,setOvinosGlobal,producaoAnualGlobal,setProducaoAnualGlobal,demaisProducaoGlobal,setDemaisProducaoGlobal,doencas,setDoencas}}>
      <NavigationContainer>
          <StackNavigator/>
      </NavigationContainer>
      </TableContext.Provider>
      </DetalhesContext.Provider>
      </DadosContext.Provider>
    </CooperadoContext.Provider>
  );
}

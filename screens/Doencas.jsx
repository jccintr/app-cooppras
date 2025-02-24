import { StyleSheet, Text, View,TouchableOpacity,FlatList } from 'react-native'
import React, {createRef,useContext,useState} from 'react'
import Modal from 'react-native-modalbox';
import { TableContext } from '../contexts/TableContext'
import CardDoenca from '../components/cards/CardDoenca'
import HeightSpacer from '../components/reusable/HeightSpacer'
import { cores } from '../styles/cores'
import Botao from '../components/reusable/Botao'
import InputField from '../components/InputField';
import FontAwesome from '@expo/vector-icons/FontAwesome';
 
const ListHeader = ({onPress}) => {
  
  return(
  <TouchableOpacity onPress={onPress} style={{width:'100%',marginBottom:20}}>
    <Text style={{textAlign:'center',fontSize:16,color:cores.blueGray}}>Adicionar</Text>
  </TouchableOpacity>
  )
}

const Doencas = ({navigation}) => {
  const {doencas,setDoencas} = useContext(TableContext)
  const modalNewRef = createRef();
  const modalEditRef = createRef();
  const [modalNewOpen,setModalNewOpen] = useState(false);
  const [modalEditOpen,setModalEditOpen] = useState(false);
  const [tipo,setTipo] = useState('');
  const [periodo,setPeriodo] = useState('');
  const [tratamento,setTratamento] = useState('');
  const [medicacao,setMedicacao] = useState('');
  const [selectedDoenca,setSelectedDoenca] = useState(null)


  const onAdd = () => {
    setSelectedDoenca(null);
    setTipo('');
    setModalNewOpen(true)
 }

 const onEdit = (doenca) =>{
  setSelectedDoenca(doenca);
  setTipo(doenca.tipo);
  setPeriodo(doenca.periodo);
  setTratamento(doenca.tratamento);
  setMedicacao(doenca.medicacao)
  setModalEditOpen(true);
}

 const saveNew = () => {
    const id = doencas.length > 0 ? doencas.length+1 : 1;
    const novaDoenca =  { id,tipo,periodo,tratamento,medicacao };
    const novasDoencas = [...doencas, novaDoenca];
    setDoencas(novasDoencas);
    setModalNewOpen(false);
 }

 const save = () => {
    
     const edited = {id:selectedDoenca.id,tipo,periodo,tratamento,medicacao};
     let newDoencas = doencas
     newDoencas.splice(selectedDoenca.id-1, 1,edited );
     setDoencas(newDoencas);
     setModalEditOpen(false);

 }

 const onDelete = () => {

  const novasDoencas = doencas.filter((item)=> item.id !== selectedDoenca.id);
  setDoencas(novasDoencas);
  setModalEditOpen(false);
 }

  return (
    <View style={styles.container}>
     
     <FlatList 
        ListHeaderComponent={<ListHeader onPress={onAdd}/>}
        showsVerticalScrollIndicator={false}
        style={{width:'100%'}}
        data={doencas}
        keyExtractor={(item)=> item.id.toString()}
        renderItem={({item})=><CardDoenca doenca={item} onPress={onEdit} />}
        ItemSeparatorComponent={<HeightSpacer h={8}/>}
       // ListEmptyComponent={<EmptyList title="No accounts found" mensagem={'Please, create a new account'}/>}
        contentContainerStyle={doencas.length===0?{flexGrow:1,alignItems:'center',justifyContent:'center'}:''}
    />
    <Modal isOpen={modalNewOpen} onClosed={()=>setModalNewOpen(false)} style={styles.modal} backgroundColor={'#ff0'} coverScreen={true} position={"bottom"} ref={modalNewRef}>
         <Text style={styles.modalTitle}>Nova Doença</Text>
         <HeightSpacer h={20}/>
         <InputField 
            label={'Tipo:'} 
            placeholder={'Informe o tipo da doença'} 
            value={tipo} 
            onChangeText={t=>setTipo(t)} 
            password={false} 
            keyboard={'default'}
          />
          <InputField 
            label={'Período:'} 
            placeholder={'Informe o período'} 
            value={periodo} 
            onChangeText={t=>setPeriodo(t)} 
            password={false} 
            keyboard={'default'}
          />
          <InputField 
            label={'Tratamento:'} 
            placeholder={'Informe o tratamento da doença'} 
            value={tratamento} 
            onChangeText={t=>setTratamento(t)} 
            password={false} 
            keyboard={'default'}
          />
          <InputField 
            label={'Medicação:'} 
            placeholder={'Informe a medicação da doença'} 
            value={medicacao} 
            onChangeText={t=>setMedicacao(t)} 
            password={false} 
            keyboard={'default'}
          />
          <Botao 
              onPress={()=>saveNew()} 
              text={'ADICIONAR'} 
              textSize={16} 
              textColor={cores.white} 
              width={'100%'} 
              backgroundColor={cores.primary} 
              borderWidth={0} 
              borderRadius={10} 
              isLoading={false}
          />
    </Modal>
    <Modal isOpen={modalEditOpen} onClosed={()=>setModalEditOpen(false)} style={styles.modal} backgroundColor={'#ff0'} coverScreen={true} position={"bottom"} ref={modalEditRef}>
         <Text style={styles.modalTitle}>Editando Doença</Text>
         <TouchableOpacity style={styles.deleteBtn} onPress={()=>onDelete()}>
            <FontAwesome name="trash-o" size={24} color={cores.vermelho} />
         </TouchableOpacity>
         <HeightSpacer h={20}/>
         <InputField 
            label={'Tipo:'} 
            placeholder={'Informe o tipo da doença'} 
            value={tipo} 
            onChangeText={t=>setTipo(t)} 
            password={false} 
            keyboard={'default'}
          />
          <InputField 
            label={'Período:'} 
            placeholder={'Informe o período'} 
            value={periodo} 
            onChangeText={t=>setPeriodo(t)} 
            password={false} 
            keyboard={'default'}
          />
          <InputField 
            label={'Tratamento:'} 
            placeholder={'Informe o tratamento da doença'} 
            value={tratamento} 
            onChangeText={t=>setTratamento(t)} 
            password={false} 
            keyboard={'default'}
          />
          <InputField 
            label={'Medicação:'} 
            placeholder={'Informe a medicação da doença'} 
            value={medicacao} 
            onChangeText={t=>setMedicacao(t)} 
            password={false} 
            keyboard={'default'}
          />
          <Botao 
              onPress={()=>save()} 
              text={'SALVAR'} 
              textSize={16} 
              textColor={cores.white} 
              width={'100%'} 
              backgroundColor={cores.primary} 
              borderWidth={0} 
              borderRadius={10} 
              isLoading={false}
          />
    </Modal>
    </View>
  )
}

export default Doencas

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    padding:20
},
modal: {
  alignItems:'center',
  height: 500,
  padding:20
},
modalTitle:{
  fontSize: 22,
  fontWeight:'bold',
  color: cores.onyxBlack
},
deleteBtn:{
  position:'absolute',
  top:25,
  right:30
}
})
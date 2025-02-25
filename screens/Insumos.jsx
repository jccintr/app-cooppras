import { StyleSheet, Text, View,TouchableOpacity,FlatList } from 'react-native'
import React, {createRef,useContext,useState} from 'react'
import Modal from 'react-native-modalbox';
import { TableContext } from '../contexts/TableContext'
import CardInsumo from '../components/cards/CardInsumo'
import HeightSpacer from '../components/reusable/HeightSpacer'
import { cores } from '../styles/cores'
import Botao from '../components/reusable/Botao'
import InputField from '../components/InputField';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ListHeader from '../components/ListHeader';

const Insumos = ({navigation}) => {
     const {insumos,setInsumos} = useContext(TableContext)
      const modalNewRef = createRef();
      const modalEditRef = createRef();
      const [modalNewOpen,setModalNewOpen] = useState(false);
      const [modalEditOpen,setModalEditOpen] = useState(false);
      const [tipo,setTipo] = useState('');
      const [periodo,setPeriodo] = useState('');
      const [quant,setQuant] = useState('');
      const [resultado,setResultado] = useState('');
      const [selectedInsumo,setSelectedInsumo] = useState(null)

      const onAdd = () => {
        setSelectedInsumo(null);
        setTipo('');
        setQuant('');
        setPeriodo('');
        setResultado('');
        setModalNewOpen(true)
     }
    
     const onEdit = (insumo) =>{
      setSelectedInsumo(insumo);
      setTipo(insumo.tipo);
      setPeriodo(insumo.periodo);
      setQuant(insumo.quant);
      setResultado(insumo.resultado);
      setModalEditOpen(true);
    }
    
     const saveNew = () => {
        const id = insumos.length > 0 ? insumos.length+1 : 1;
        const novoInsumo =  { id,tipo,periodo,quant,resultado };
        const novosInsumos = [...insumos, novoInsumo];
        setInsumos(novosInsumos);
        setModalNewOpen(false);
     }
    
     const save = () => {
        
         const edited = {id:selectedInsumo.id,tipo,periodo,quant,resultado};
         let newInsumos = insumos
         newInsumos.splice(selectedInsumo.id-1, 1,edited );
         setInsumos(newInsumos);
         setModalEditOpen(false);
    
     }
    
     const onDelete = () => {
    
      const novosInsumos = insumos.filter((item)=> item.id !== selectedInsumo.id);
      setInsumos(novosInsumos);
      setModalEditOpen(false);
     }

  return (
    <View style={styles.container}>
     
     <FlatList 
        ListHeaderComponent={<ListHeader onPress={onAdd}/>}
        showsVerticalScrollIndicator={false}
        style={{width:'100%'}}
        data={insumos}
        keyExtractor={(item)=> item.id.toString()}
        renderItem={({item})=><CardInsumo insumo={item} onPress={onEdit} />}
        ItemSeparatorComponent={<HeightSpacer h={8}/>}
       // ListEmptyComponent={<EmptyList title="No accounts found" mensagem={'Please, create a new account'}/>}
        contentContainerStyle={insumos.length===0?{flexGrow:1,alignItems:'center',justifyContent:'center'}:''}
    />
    <Modal isOpen={modalNewOpen} onClosed={()=>setModalNewOpen(false)} style={styles.modal} backgroundColor={'#ff0'} coverScreen={true} position={"bottom"} ref={modalNewRef}>
         <Text style={styles.modalTitle}>Novo Insumo</Text>
         <HeightSpacer h={20}/>
         <InputField 
            label={'Tipo:'} 
            placeholder={'Informe o tipo do insumo'} 
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
            label={'Quantidade:'} 
            placeholder={'Informe a quantidade de insumo'} 
            value={quant} 
            onChangeText={t=>setQuant(t)} 
            password={false} 
            keyboard={'number-pad'}
          />
          <InputField 
            label={'Resultado:'} 
            placeholder={'Informe o resultado'} 
            value={resultado} 
            onChangeText={t=>setResultado(t)} 
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
         <Text style={styles.modalTitle}>Editando Insumo</Text>
         <TouchableOpacity style={styles.deleteBtn} onPress={()=>onDelete()}>
            <FontAwesome name="trash-o" size={24} color={cores.vermelho} />
         </TouchableOpacity>
         <HeightSpacer h={20}/>
         <InputField 
            label={'Tipo:'} 
            placeholder={'Informe o tipo do insumo'} 
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
            label={'Quantidade:'} 
            placeholder={'Informe a quantidade de insumo'} 
            value={quant} 
            onChangeText={t=>setQuant(t)} 
            password={false} 
            keyboard={'number-pad'}
          />
          <InputField 
            label={'Resultado:'} 
            placeholder={'Informe o resultado'} 
            value={resultado} 
            onChangeText={t=>setResultado(t)} 
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

export default Insumos

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
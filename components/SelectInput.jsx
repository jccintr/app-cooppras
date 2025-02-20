import { StyleSheet, Text, TouchableOpacity, View,Modal, SafeAreaView, FlatList } from 'react-native'
import React, {useState} from 'react';
import { Entypo } from '@expo/vector-icons';
import { cores } from '../styles/cores';





const SelectInput = ({label,placeholder,modalTitle,options,onChangeSelect,value}) => {
   const [title,setTitle] = useState(value || placeholder);
   const [selected,setSelected] = useState(value || 0);
   const [modalVisible,setModalVisible] = useState(false);


   const onChange = (item) => {
      onChangeSelect(item);
      setTitle(item);
      setModalVisible(false);
      onChangeSelect(item);
      setSelected(item);
   }

   const SelectItem = ({item}) => {

    return (
        <TouchableOpacity style={[styles.selectItem,{backgroundColor:item===selected?'#eee':'#fff'}]} onPress={()=>onChange(item)}>
              <Text style={styles.selectItemText}>{item}</Text>
              {item===selected&&<Entypo name="check" size={24} color={cores.black}/>}
        </TouchableOpacity>
       
    );
    
   }

  return (

      <>
            <View style={styles.select}> 
                <Text style={{color:cores.inputLabel, fontWeight:'bold',marginBottom: 5,marginLeft:5}}>{label}</Text>
                <TouchableOpacity style={styles.container} onPress={()=>setModalVisible(true)}>
                    <Text style={styles.label} numberOfLines={1}>{title}</Text>
                    <Entypo name="chevron-down" size={24} color={cores.black} />
                </TouchableOpacity>
            </View>

            <Modal visible={modalVisible} transparent={false} animationType="slide" onRequestClose={()=>setModalVisible(false)}>
               
                    <View style={styles.header}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=>setModalVisible(false)}>
                            <Text style={styles.modaltitle}>{modalTitle}</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={()=>setModalVisible(false)}>
                           <Text style={styles.modalCancel}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList 
                    data={options}
                    keyExtractor={(item)=>item}
                    renderItem={({item})=><SelectItem  item={item} />}
                    />
               
            </Modal>
      </>
   );
}

export default SelectInput

const styles = StyleSheet.create({

select: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    
  },
container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:50,
    width: '100%',
    paddingHorizontal: 12,
    borderRadius:10,
    borderWidth:1,
    marginBottom: 15,
},
label:{
   fontSize: 14, 
   color: cores.inputLabel,
},
header:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    padding:12,
    borderBottomWidth:1,
    borderBottomColor: '#ddd',
   
   
},
modaltitle:{
    fontSize: 18,
    color: '#555',
    fontWeight:'bold'
},
modalCancel:{
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
},
selectItem:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth:1,
    padding:10,
},
selectItemText:{
    fontSize: 16,
    color: '#555',
}
})
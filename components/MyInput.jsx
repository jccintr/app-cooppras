import { StyleSheet, Text, View,TextInput, TouchableOpacity,Modal, SafeAreaView } from 'react-native'
import React,{useState, createRef} from 'react'
import { cores } from '../styles/cores'

const MyInput = (props) => {
    const [modalVisible,setModalVisible] = useState(false);
    const fieldRef = createRef();


   

    const setFocus = () =>{
        setTimeout(() => {
            fieldRef.current.focus();
        }, 50);
    }

  return (
    <View>
    <Text style={styles.label}>{props.label}</Text>
    <TouchableOpacity activeOpacity={1} style={styles.inputContainer} onPress={()=>setModalVisible(true)}>
        <Text style={[styles.inputText,{color:props.value===''?'#a1a1a1':'#333'}]}>{props.value || props.placeholder}</Text>
        <Modal visible={modalVisible} transparent={true} animationType="slide" onRequestClose={()=>setModalVisible(false)} onShow={()=>setFocus()}>
            <View style={styles.modalArea}>
           <SafeAreaView style={{flex:1, width:'100%'}}>
           <TouchableOpacity style={styles.outside} onPress={()=>setModalVisible(false)}>
            <View style={{paddingVertical:10,borderTopWidth:1,borderColor:'#a1a1a1',backgroundColor: cores.background,borderTopLeftRadius:15,borderTopRightRadius:15}}>
               <Text style={[styles.label,{marginLeft:20}]}>{props.label}</Text>
               <TextInput ref={fieldRef} {...props} style={styles.input}  onChangeText={props.onChangeText} onBlur={()=>setModalVisible(false)} onSubmitEditing={()=>setModalVisible(false)}/>
               </View>
           </TouchableOpacity>
           </SafeAreaView>
           </View>
        </Modal>
    </TouchableOpacity>
    </View>
  )
}

export default MyInput

const styles = StyleSheet.create({
    inputContainer:{
        backgroundColor: cores.inputBackground,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderWidth:1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        paddingLeft:10
    },
    inputText:{
      fontSize:14,
    },
    input:{
       
        backgroundColor: cores.inputBackground,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth:1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        paddingLeft:10,
        marginHorizontal:20,
    },
    outside:{
       flex:1,
       justifyContent:'flex-end',
      
    },
    modalArea:{
        flex:1,
        justifyContent:'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        },

        label:{
            fontWeight:'bold',
            marginLeft:5,
            marginBottom:5,
            color: cores.inputLabel,
           
         },
})
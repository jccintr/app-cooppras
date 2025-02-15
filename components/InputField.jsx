import React from 'react'
import { StyleSheet, View,TextInput,Text,KeyboardAvoidingView,Platform} from 'react-native';
import { cores } from '../styles/cores';





const InputField = ( {label,placeholder, value, onChangeText, password,keyboard} ) => {

  return (
    <View>
        <Text style={styles.label}>{label}</Text>
         <View style={styles.inputArea}>
              <TextInput style={styles.input}
                  placeholder={placeholder}
                  value={value}
                  onChangeText={onChangeText}
                  secureTextEntry={password}
                  keyboardType={keyboard}
                  placeholderTextColor={'#a1a1a1'}
              />
         </View>
    </View>
  )
}

export default InputField


const styles = StyleSheet.create({
  
    label:{
       fontWeight:'bold',
       marginLeft:5,
       marginBottom:5,
       color: cores.inputLabel,
      
    },
    inputArea: {
        backgroundColor: cores.inputBackground,
        width: '100%',
        height: 50,
        flexDirection: 'row',
      
        alignItems: 'center',
        marginBottom: 15,
        borderWidth:1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
    },
     input: {
      flex: 1,
      fontSize: 14,
      paddingHorizontal: 4,
      color: '#000',
      marginLeft: 10,
      height: 48,
    },
   
  });
import { StyleSheet, Text, View,Pressable } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { cores } from '../styles/cores';
import HeightSpacer from './reusable/HeightSpacer';


const YesNoInput = ({question,value,setValue}) => {
  return (
    <View>
        <Text style={styles.label}>{question}</Text>
        <HeightSpacer h={10}/>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-around'}}>
            <Pressable style={{flexDirection:'row',gap:10,alignItems:'center'}} onPress={()=>setValue(!value)}>
                <Feather name={value?"check-circle":'circle'} size={24} color="black" />
                <Text>Sim</Text>
            </Pressable>
            <Pressable style={{flexDirection:'row',gap:10,alignItems:'center'}} onPress={()=>setValue(!value)}>
                <Feather name={value?"circle":'check-circle'} size={24} color="black" />
                <Text>Não</Text>
            </Pressable>
         </View>
         <HeightSpacer h={20}/>
    </View>
  )
}

export default YesNoInput

const styles = StyleSheet.create({
    optionContainer:{

    },
    label:{
       fontWeight:'bold',
        marginLeft:5,
        marginBottom:5,
        color: cores.inputLabel,   
    }
})
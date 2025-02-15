import { StyleSheet, Text, SafeAreaView,StatusBar,View } from 'react-native'
import React, {useState} from 'react'
import Botao from '../components/reusable/Botao'
import HeightSpacer from '../components/reusable/HeightSpacer'
import { cores } from '../styles/cores'

const Etapas = ({navigation}) => {
    const [isLoading,setIsLoading] = useState(false);

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
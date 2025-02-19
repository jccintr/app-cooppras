import { StyleSheet, Text, SafeAreaView,StatusBar,View } from 'react-native'
import React, {useState} from 'react'
import Botao from '../components/reusable/Botao'
import HeightSpacer from '../components/reusable/HeightSpacer'
import { cores } from '../styles/cores'

const InfoAgro = ({navigation}) => {
    const [isLoading,setIsLoading] = useState(false);

  return (
     <View style={styles.container}>
        <StatusBar animated={true} backgroundColor={'#fff'} barStyle="dark-content"/>
         <Botao 
            onPress={()=>navigation.navigate('caprinos')} 
            text={'Rebanho de Caprinos'} 
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
            onPress={()=>navigation.navigate('ovinos')} 
            text={'Rebanho de Ovinos'} 
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
            onPress={()=>navigation.navigate('producaoAnual')} 
            text={'Boletim de Produção Anual'} 
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
            onPress={()=>{}} 
            text={'Ocorrência de Doenças'} 
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
            onPress={()=>{}} 
            text={'Uso de Insumos, silagem e fertilizantes'} 
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
            onPress={()=>navigation.navigate('demais')} 
            text={'Demais produção agropecuária'} 
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

export default InfoAgro

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:20
  }
})
import { SafeAreaView, StyleSheet, Text, View,StatusBar } from 'react-native'
import React, {useState} from 'react'
import AssetImage from '../components/reusable/AssetImage'
import HeightSpacer from '../components/reusable/HeightSpacer'
import logo from '../assets/logo.png'
import { cores } from '../styles/cores'
import Botao from '../components/reusable/Botao'

const Home = ({navigation}) => {
   const [isLoading,setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor={'#fff'} barStyle="dark-content"/>
      <AssetImage source={logo} mode={'contain'} width={200} height={100} />
      <HeightSpacer h={20}/>
      <Text style={styles.title}>MAPA DE REPRODUÇÃO AGROPECUÁRIA</Text>
      <HeightSpacer h={20}/>
      <Text style={styles.subTitle}>COOPERATIVA DE PEQUENOS PRODUTORES RURAIS DE ASSUNÇÃO DO PIAUÍ</Text>
      <HeightSpacer h={40}/>
      <Botao 
        onPress={()=>navigation.navigate('etapas')} 
        text={'PREENCHER FORMULÁRIO'} 
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

export default Home

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        
    },
    title:{
        textAlign: 'center',
        fontWeight:'bold'
    },
    subTitle:{
         textAlign: 'center'
    }
})
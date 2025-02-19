import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Etapas from '../screens/Etapas';
import Form1 from '../screens/Form1';
import Form2 from '../screens/Form2';
import Form3 from '../screens/Form3';
import InfoAgro from '../screens/InfoAgro';
import Caprinos from '../screens/Caprinos';
import Ovinos from '../screens/Ovinos';
import ProducaoAnual from '../screens/ProducaoAnual';
import Demais from '../screens/Demais';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='home'>
       <Stack.Screen name='home' component={Home} options={{headerShown:false}}/>
       <Stack.Screen name='etapas' component={Etapas} options={{headerTitle:'Formulário'}}/>
       <Stack.Screen name='form1' component={Form1} options={{headerTitle:'Dados do Cooperado'}}/>
       <Stack.Screen name='form2' component={Form2} options={{headerTitle:'Dados da Propriedade'}}/>
       <Stack.Screen name='form3' component={Form3} options={{headerTitle:'Caracteristicas da Propriedade'}}/>
       <Stack.Screen name='infoAgro' component={InfoAgro} options={{headerTitle:'Informações Agropecuárias'}}/>
       <Stack.Screen name='caprinos' component={Caprinos} options={{headerTitle:'Rebanho de Caprinos'}}/>
       <Stack.Screen name='ovinos' component={Ovinos} options={{headerTitle:'Rebanho de Ovinos'}}/>
       <Stack.Screen name='producaoAnual' component={ProducaoAnual} options={{headerTitle:'Boletim de Produção Anual'}}/>
       <Stack.Screen name='demais' component={Demais} options={{headerTitle:'Demais Produção Agropecuária'}}/>
    </Stack.Navigator>
  )
}

export default StackNavigator
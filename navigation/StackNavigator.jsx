import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Etapas from '../screens/Etapas';
import Form1 from '../screens/Form1';
import Form2 from '../screens/Form2';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='home'>
       <Stack.Screen name='home' component={Home} options={{headerShown:false}}/>
       <Stack.Screen name='etapas' component={Etapas} options={{headerTitle:'Etapas'}}/>
       <Stack.Screen name='form1' component={Form1} options={{headerTitle:'Dados do Cooperado'}}/>
       <Stack.Screen name='form2' component={Form2} options={{headerTitle:'Dados da Propriedade'}}/>
    </Stack.Navigator>
  )
}

export default StackNavigator
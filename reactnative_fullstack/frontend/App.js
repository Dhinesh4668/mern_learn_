import { NavigationContainer } from '@react-navigation/native'

import Navigation from './app/navigation/Navigation'
import { View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}

export default App
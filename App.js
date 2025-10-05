import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import { MainTab } from './A_MainTab';
import { UserProvider } from './context';




export default function App() {




  return (
    <UserProvider>
    <SafeAreaProvider>
      <View style={{flex: 1, backgroundColor: 'transparent'}}><MainTab/></View>
    </SafeAreaProvider>
    </UserProvider>
  )
}
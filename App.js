import { View, Text, StyleSheet } from 'react-native';
import { MainApp } from './A_main_app';
import { UserProvider } from './context';




export default function App() {




  return (
    <UserProvider>
      <View style={{flex: 1}}><MainApp/></View>
    </UserProvider>
  )
}
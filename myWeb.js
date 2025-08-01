import WebView from "react-native-webview";
import { View, StyleSheet, Alert } from "react-native";
import { ActivityIndicator } from "react-native";



export default MyWebsite = () => {



    return (
      <WebView
      originWhitelist={['*']}
      source={{ uri: 'https://www.goggle.com'}} style={styles.container}
      startInLoadingState={true} />
    );
  }

  const styles = StyleSheet.create({
    container: {flex: 1}
  })
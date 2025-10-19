import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Landing({navigation}) {
    //[1]
    const goToHomeScreen = () => {
        navigation.navigate('Home');
    }
    //[2]
    // const goToHomeScreen = () => {
    //     navigation.navigate('Main');
    // }
  return (
    <View style={styles.container}>
      <Text>This is landing</Text>
        <TouchableOpacity onPress={goToHomeScreen}>
            <Text>Go to Home Screen</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

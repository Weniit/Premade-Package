import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Settings({navigation}) {
  const goToHomeScreen = () => {
    navigation.navigate('Home'); // This navigates to the drawer route
};
  return (
    <View style={styles.container}>
      <Text>This is Settings</Text>
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

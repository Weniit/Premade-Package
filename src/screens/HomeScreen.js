import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}) {
    const gotoLanding = () => {
        navigation.navigate('Landing');
    }
    const gotoSettings = () => {
        navigation.navigate('Settings');
    }
  return (
    <View style={styles.container}>
      <Text>This is your home</Text>
        <TouchableOpacity onPress={gotoLanding}>
            <Text>Go to Landing</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={gotoSettings}>
            <Text>Go to Settings</Text>
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

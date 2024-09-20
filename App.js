import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn}>
        <Text style={styles.texto}>Emergencia</Text>
      </Pressable>
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
  btn: {
    backgroundColor: 'red',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 5,
    elevation: 3,
  },
  texto: {
    color: 'white',
  }
});

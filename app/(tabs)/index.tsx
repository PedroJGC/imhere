import { StyleSheet, Text, View } from 'react-native'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>Bem-vindo ao seu app!</Text>
      <Text style={styles.textTwo}>Iniciando no expo!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOne: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textTwo: {
    color: '#6b6b6b',
    fontSize: 16,
  },
})

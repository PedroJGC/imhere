import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>Bem-vindo ao seu app!</Text>
      <Text style={styles.textTwo}>Iniciando no expo!</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        placeholderTextColor="#6b6b6b"
      />
    </View>
  )
}

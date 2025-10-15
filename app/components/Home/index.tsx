import { Text, View } from 'react-native'
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>Bem-vindo ao seu app!</Text>
      <Text style={styles.textTwo}>Iniciando no expo!</Text>
    </View>
  )
}

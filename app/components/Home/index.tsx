import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '../Participant'

import { styles } from './styles'

export function Home() {
  function handleParticipantAdd() {
    console.log('Adicionar')
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você removeu o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>Nome do evento</Text>
      <Text style={styles.textTwo}>Sábado, 18 de outubro de 2025</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite algo"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant
        name="Pedro"
        onRemove={() => handleParticipantRemove('Pedro')}
      />
    </View>
  )
}

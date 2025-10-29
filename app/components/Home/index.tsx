import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import { Participant } from '../Participant'

import { styles } from './styles'

export function Home() {
  const participants = [
    'Mayk',
    'Diego',
    'Gabriel',
    'Paulo',
    'Pedro',
    'Guilherme',
    'Ana',
    'Amanda',
    'Jack',
    'João',
  ]

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

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

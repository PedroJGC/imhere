import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'

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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Adicione participantes ao evento.
          </Text>
        )}
      />
    </View>
  )
}

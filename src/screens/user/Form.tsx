import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

export const Form = ({
  route,
  navigation,
}: {
  route: any
  navigation: any
}) => {
  const [user, setUser] = useState(route.params || {})

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="Informe seu nome"
        onChangeText={name => setUser({ ...user, name })}
        value={user.name}
        style={styles.input}
      />

      <TextInput
        placeholder="Informe seu e-mail"
        onChangeText={email => setUser({ ...user, email })}
        value={user.email}
        style={styles.input}
        autoCorrect={false}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Informe seu e-mail"
        onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
        value={user.avatarUrl}
        style={styles.input}
      />

      <Button
        title="Salvar"
        onPress={() => {
          navigation.goBack()
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  label: {
    marginLeft: 20,
  },

  input: {
    height: 40,
    borderColor: '#ccc',
    borderRadius: 30,
    borderWidth: 1,
    marginBottom: 10,
    marginVertical: 10,
    paddingLeft: 20,
  },
})

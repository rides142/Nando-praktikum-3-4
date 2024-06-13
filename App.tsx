import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState<{ key: string; name: string }[]>([
    { key: '1', name: 'Budi' },
    { key: '2', name: 'Mamad' },
    { key: '3', name: 'Rides' },
    { key: '4', name: 'Skina' },
    { key: '5', name: 'Duarrr' },
  ]);

  const addItem = () => {
    if (text.trim().length > 0) {
      setItems(prevItems => [
        ...prevItems,
        { key: (prevItems.length + 1).toString(), name: text }
      ]);
      setText('');
      Alert.alert('Item ditambahkan!');
    } else {
      Alert.alert('Teks tidak boleh kosong!');
    }
  };

  const removeItem = (key: string) => {
    setItems(prevItems => prevItems.filter(item => item.key !== key));
    Alert.alert('Item dihapus!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nando's App</Text>
      
      <Image
        style={styles.image}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTYSVi_lUv_jcrlE8AyfUXj6CTMyRR_VyAQ&s' }}
      />
      
      <Text style={styles.label}>Masukkan Teks:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Ketik sesuatu..."
      />
      
      <TouchableOpacity
        style={styles.button}
        onPress={addItem}
      >
        <Text style={styles.buttonText}>Tekan ini Bang</Text>
      </TouchableOpacity>
      
      <ScrollView>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item.name}</Text>
              <TouchableOpacity
                onPress={() => removeItem(item.key)}
                style={styles.deleteButton}
              >
                <Text style={styles.deleteText}>Hapus</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.key}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#ffffff',
  },
  input: {
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#1abc9c',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#2980b9',
    padding: 10,
    borderRadius: 5,
  },
  item: {
    fontSize: 20,
    color: '#ffffff',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 8,
    borderRadius: 5,
  },
  deleteText: {
    fontSize: 16,
    color: '#ffffff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default App;

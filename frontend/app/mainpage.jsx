import { useRouter } from 'expo-router';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const PEOPLE = [
  { id: '1', name: 'John Smith' },
  { id: '2', name: 'Jane Doe' },
  { id: '3', name: 'Bob Johnson' },
  { id: '4', name: 'Alice Brown' },
  { id: '5', name: 'Charlie Wilson' },
  { id: '6', name: 'Diana Prince' },
];

export default function MainPage() {
  const router = useRouter();

  const renderPerson = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push({ pathname: '/profile', params: { name: item.name } })}>
      <Image
        source={require('@/assets/images/Person_image.jpg')}
        style={styles.image}
      />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>People</Text>
      <FlatList
        data={PEOPLE}
        renderItem={renderPerson}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { fontSize: 28, fontWeight: 'bold', padding: 20, paddingBottom: 10 },
  list: { padding: 10 },
  row: { justifyContent: 'space-between', paddingHorizontal: 10 },
  card: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  image: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 14, fontWeight: '600', textAlign: 'center', color: '#333' },
});
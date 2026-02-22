import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const CONDITION_TAGS = [
  'Diabetes', 'Hypertension', 'Asthma', 'Heart Disease',
  'Cancer', 'Arthritis', 'Depression', 'Anxiety',
  'Obesity', 'Chronic Pain', 'Epilepsy', 'Alzheimers',
];

export default function ProfilePage() {
  const router = useRouter();
  const { name } = useLocalSearchParams();
  const [notes, setNotes] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.content}>

        <Image
          source={require('@/assets/images/Person_image.jpg')}
          style={styles.image}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.patientLabel}>Patient</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Date of Birth</Text>
          <Text style={styles.infoText}>Not specified</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Blood Type</Text>
          <Text style={styles.infoText}>Not specified</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Primary Physician</Text>
          <Text style={styles.infoText}>Not assigned</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Insurance</Text>
          <Text style={styles.infoText}>Not specified</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Emergency Contact</Text>
          <Text style={styles.infoText}>Not specified</Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.infoLabel}>Conditions / Diagnoses</Text>
          <View style={styles.tagContainer}>
            {CONDITION_TAGS.map((tag) => (
              <TouchableOpacity
                key={tag}
                style={[styles.tag, selectedTags.includes(tag) && styles.tagSelected]}
                onPress={() => toggleTag(tag)}>
                <Text style={[styles.tagText, selectedTags.includes(tag) && styles.tagTextSelected]}>
                  • {tag}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.infoLabel}>Allergies</Text>
          <TextInput
            style={styles.notesInput}
            placeholder="List any known allergies..."
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.infoLabel}>Current Medications</Text>
          <TextInput
            style={styles.notesInput}
            placeholder="List current medications and dosages..."
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.infoLabel}>Clinical Notes</Text>
          <TextInput
            style={styles.notesInput}
            placeholder="Add clinical notes or observations..."
            value={notes}
            onChangeText={setNotes}
            multiline
            numberOfLines={5}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Last Visit</Text>
          <Text style={styles.infoText}>February 2026</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  backButton: { padding: 16 },
  backText: { fontSize: 16, color: '#007AFF' },
  content: { alignItems: 'center', padding: 24 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 12 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  patientLabel: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: 24,
    backgroundColor: '#e8f0fe',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  sectionCard: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 8,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  infoText: { fontSize: 16, color: '#333' },
  tagContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tag: {
    backgroundColor: '#e8f4f8',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginBottom: 4,
  },
  tagSelected: { backgroundColor: '#e74c3c' },
  tagText: { fontSize: 13, color: '#2980b9', fontWeight: '500' },
  tagTextSelected: { color: '#fff' },
  notesInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    color: '#333',
    minHeight: 80,
    backgroundColor: '#fff',
  },
});
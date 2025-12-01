import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const width = Dimensions.get('screen').width; 

export default function CustomDatePicker({setDateChange}) {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  // Format date for display (example: 24 / أكتوبر / 2024)
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', locale: 'ar' };
    return new Intl.DateTimeFormat('ar-EG', options).format(date).replace(/،/g, ' / ');
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
    setDateChange(currentDate);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.dateButton}>
        <Text style={styles.dateText}>{formatDate(date)}</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={onChange}
          locale="ar" // Sets Arabic locale
          style={styles.datePicker}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9
  },
  dateButton: {
    backgroundColor: '#F8FAFC',
    width: width * 0.8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    //elevation: 2, // For Android shadow
  },
  dateText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
});

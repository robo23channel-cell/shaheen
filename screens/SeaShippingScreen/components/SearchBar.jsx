import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import SearchSvg from '../../../assets/SearchSvg.svg'; 
import Filter from './../../../assets/Filter.svg'; 


export default function SearchBar({ onSearch, onFilter = () => {} }) {
  return (
    <View style={styles.searchBar}>
      {/* Filter Button */}
      <TouchableOpacity style={styles.iconButton} onPress={onFilter}>
        {/* <Filter/> */}
        {/* <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828926.png' }} // Replace with your filter icon URL
          style={styles.icon}
        /> */}
      </TouchableOpacity>

      {/* Search Input */}
      <TextInput
        style={styles.input}
        placeholder="البحث"
        placeholderTextColor="#B0B0B0"
        onSubmitEditing={(event) => onSearch(event.nativeEvent.text)}
      />

      {/* Search Button */}
      <TouchableOpacity style={styles.iconButton} onPress={() => onSearch()}>
      <SearchSvg/>
        {/* <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149852.png' }} // Replace with your search icon URL
          style={styles.icon}
        /> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    borderColor: '#EAEAEA',
    borderWidth: 1,
    paddingHorizontal: 10,
    height: 50,
    width: '90%'
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    textAlign: 'right', // For Arabic text alignment
  },
  iconButton: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

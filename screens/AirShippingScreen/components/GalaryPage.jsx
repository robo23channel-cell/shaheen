import React, { useState } from 'react';
import { View, Button, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ImageViewing from 'react-native-image-viewing';

// const images = [
//   { uri: 'https://i.imgur.com/XP2BE7q.jpeg' },
//   { uri: 'http://i.imgur.com/XP2BE7q.jpg' },
 
// ];

export default function GalleryPage({route}) {
  const {images } = route.params; 

  const [visible, setVisible] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imgs, setImgs] = useState(images.map(e => { return {uri: e}}));
  console.log("fff",imgs)
  // Function to open the image viewer at the selected index
  const openImageViewer = (index) => {
    console.log(index)
    setSelectedIndex(index);
    setVisible(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 50,  }}>
      {/* Button to open the gallery directly */}

      {/* Horizontal list of thumbnails */}
      <FlatList
        data={imgs}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => openImageViewer(index)}>
            <Image source={{ uri: item.uri }} style={styles.thumbnail} />
          </TouchableOpacity>
        )}
        style={styles.thumbnailList}
        showsHorizontalScrollIndicator={false}
      />

      {/* Fullscreen Image Viewing Component */}
      <ImageViewing
        images={imgs}
        imageIndex={selectedIndex}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnailList: {
    marginVertical: 10,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginHorizontal: 5,
  },
});

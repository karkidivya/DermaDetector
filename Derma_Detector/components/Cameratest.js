import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Menu, Provider } from 'react-native-paper';

const Test = () => {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(null);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const pickImage = async (source) => {
    let result;
    if (source === 'camera') {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
    }

    if (!result.canceled) {
      setImage(result.uri);
    }
    closeMenu();
  };

  return (
    <Provider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={openMenu} title="Open Menu" />

        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu} title="Choose an option" />}
        >
          <Menu.Item onPress={() => pickImage('camera')} title="Take a Photo" />
          <Menu.Item onPress={() => pickImage('library')} title="Upload from Device" />
        </Menu>

        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    </Provider>
  );
};

export default Test;

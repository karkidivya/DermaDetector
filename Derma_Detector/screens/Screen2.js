import * as React from "react";
import { useState } from "react";
// import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, TouchableHighlight } from "react-native";
import { SafeAreaView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

import Test from "@/components/Cameratest";

import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Menu, Provider } from "react-native-paper";
import axios from 'axios';
const Screen2 = () => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [text, onChangeText] = useState("");

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const pickImage = async (source) => {
    let result;
    if (source === "camera") {
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
      setImage(result.assets[0].uri);
    }
    closeMenu();
  };

  const getPrediction = async () => {
    // if (!image || !text) {
    //   alert('Please provide both image and text description');
    //   return;
    // }

    // Convert image to base64
    const response = await fetch(image);
    const blob = await response.blob();
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64data = reader.result.split(',')[1];
      console.log(base64data, text)
      // Send the image and text to the backend
      try {
        const res =  await axios.post('http://localhost:5000/predict', {
          image: base64data,
          text: text,
        });
        // setTreatment(res.data.treatment_solution);
      } catch (error) {
        console.error(error);
        alert('Error getting treatment solution');
      }
    };
    reader.readAsDataURL(blob);
  };

  return (
    <LinearGradient
      style={[styles.screen2, styles.screen2Border]}
      locations={[0, 0.99]}
      colors={["#2a2d32", "#131313"]}
    >
      <View>
        <Text style={[styles.getYourSkin, styles.typeHereFlexBox]}>
          Get your skin checked
        </Text>
      </View>

      <Provider>
        <View style={[styles.menubutton]}>
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Pressable onPress={openMenu}>
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require('../assets/images/ellipse-821.png')}
              />
            </Pressable>}
          >
          {/* <Button onPress={openMenu} title="Open Menu" ><Image
        style={[styles.screen2Child, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/images/ellipse-821.png")}
        onPress={openMenu} title="Open Menu"
      /></Button>

          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu} title="Choose an option" />}
          > */}
            

            <Menu.Item
              onPress={() => pickImage("camera")}
              title="Take a Photo"
            />
            <Menu.Item
              onPress={() => pickImage("library")}
              title="Upload from Device"
            />
          </Menu>

          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200, marginTop: 20 }}
            />
          )}
          {console.log("hello")}
        </View>
      </Provider>

      <View style={[styles.modeSetting, styles.analyzeFlexBox]}>
        <Text
          style={[styles.additionalInformationAbout, styles.typeHereFlexBox]}
        >
          Additional information about your condition
        </Text>

        <SafeAreaView>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={4}
            onChangeText={onChangeText}
            value={text}
            placeholder="Type here.."
            // keyboardType="numeric"
          />
        </SafeAreaView>
        <View style={[styles.top, styles.topFlexBox]}>
          <Image
            style={styles.ventIcon}
            contentFit="cover"
            source={require("../assets/images/vent.png")}
          />
        </View>
      </View>

      <View style={[styles.analyzebutton]}>
        <Button
          title="Analyze"
           color="#d9d9d9"
          // onPress={() => navigation.navigate("Screen1")}
          onPress={getPrediction}
        />
      </View>

    
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  analyzebutton: {
    marginBottom: 10,
    marginTop:5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    textAlignVertical: "top",
  },
  menubutton: {
    flexDirection: "row", // Ensure items are laid out horizontally
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20, // Adjust this margin as needed
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },

  screen2Border: {
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
  },
  iconLayout1: {
    width: 110, // Adjust the width and height of the ellipse image
    height: 110, // to fit your design requirements
    marginLeft: 10, // Adjust margins as needed
  },
  analyzeFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  typeHereFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  topFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  // buttonsbutton2Layout: {
  //   height: 53,
  //   position: "absolute",
  // },
  iconLayout: {
    height: 24,
    width: 24,
    display: "none",
  },
  screen2Child: {
    // top: 198,
    // right: 96,
    // bottom: 438,
    // left: 96,
    borderRadius: 933,
    maxHeight: "100%",
    // position: "absolute",
  },
  additionalInformationAbout: {
    // width: 385,
    // height: 18,
    color: Color.labelColorDarkPrimary,
    // fontFamily: FontFamily.montserratRegular,
    // lineHeight: 18,
    // fontSize: FontSize.size_smi,
    // textAlign: "left",
    // letterSpacing: 0,
  },
  modeSettingChild: {
    borderRadius: 8,
    backgroundColor: "#d9d9d9",
    width: 297,
    height: 66,
    marginTop: 20,
  },
  ventIcon: {
    width: 44,
    height: 44,
  },
  top: {
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: 0,
    marginTop: 20,
    justifyContent: "center",
  },
  modeSetting: {
    // right: -1,
    // bottom: 161,
    // left: 1,
    backgroundColor: "rgba(255, 255, 255, 0.44)",
    borderColor: Color.labelColorDarkPrimary,
    borderWidth: 1,
    paddingHorizontal: 50,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    borderStyle: "solid",
    borderRadius: Border.br_21xl,
  },
  getYourSkin: {
    // top: 97,
    marginTop: 57,
    marginLeft: 19,
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    // left: 19,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    letterSpacing: 0,
    // position: "absolute",
  },
  // typeHere: {
  //   top: 535,
  //   left: 54,
  //   color: "#000",
  //   width: 290,
  //   opacity: 0.6,
  //   fontFamily: FontFamily.montserratRegular,
  //   lineHeight: 18,
  //   fontSize: FontSize.size_smi,
  //   textAlign: "left",
  //   letterSpacing: 0,
  //   position: "absolute",
  // },

  buttonShellIcon: {
    top: 0,
    right: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
  },
  labelChild: {
    width: 139,
    height: 21,
  },
  label: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    overflow: "hidden",
  },
  labelWrapper: {
    paddingLeft: Padding.p_7xs,
  },

  // endIcon: {
  //   marginTop: -12,
  //   top: "50%",
  //   right: 14,
  //   position: "absolute",
  // },
  buttonsbutton2: {
    top: 708,
    width: 326,
    left: 19,
  },
  // homeIndicator: {
  //   marginLeft: -67,
  //   bottom: 8,
  //   left: "50%",
  //   borderRadius: Border.br_81xl,
  //   backgroundColor: Color.labelColorDarkPrimary,
  //   width: 134,
  //   height: 5,
  //   position: "absolute",
  // },
  // homeindicator: {
  //   right: 27,
  //   bottom: 40,
  //   left: 33,
  //   height: 34,
  //   position: "absolute",
  // },
  analyze: {
    top: 719,
    left: 108,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
    display: "flex",
    width: 142,
    height: 28,
    color: Color.labelColorDarkPrimary,
    justifyContent: "center",
  },
  screen2: {
    borderColor: Color.colorGray_100,
    borderWidth: 2,
    flex: 1,
    width: "100%",
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Screen2;

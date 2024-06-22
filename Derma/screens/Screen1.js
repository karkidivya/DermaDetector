import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TouchableHighlight,
  Image
} from "react-native";
// import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Border, Color } from "../GlobalStyles";

const Screen1 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.screen1}
      locations={[0, 0.99]}
      colors={["#2a2d32", "#131313"]}
    >
      <Text style={styles.revolutionizingSkinHealth}>
        Revolutionizing skin health diagnostics with AI
      </Text>
      <TouchableHighlight
        style={styles.buttonsbutton1}
        underlayColor="#fff"
        activeOpacity={0.2}
        // onPress={() => navigation.navigate("/Modeltester")}
        onPress={() => navigation.navigate("Screen2")}
      >
        <>
        
          <Image
            style={[styles.buttonShellIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/images/button-shell.png")}
          />
          <View style={styles.buttonContent}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/images/start-icon.png")}
            />
            <View style={styles.labelWrapper}>
              <View style={styles.label}>
                <Image
                  style={styles.labelChild}
                  contentFit="cover"
                  source={require("../assets/images/group-1.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={[styles.endIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/images/end-icon.png")}
          />
        </>
      </TouchableHighlight>
      {/* <View style={styles.homeindicator}>
        <View style={styles.homeIndicator} />
      </View> */}
      <Image
        style={styles.image41Icon}
        contentFit="cover"
        source={require("../assets/images/image-41.png")}
      />
      <Text style={styles.dermadetector}>DermaDetector</Text>
      <Text style={[styles.realTimeScreenCondition, styles.getStartedFlexBox]}>
        Real-time screen condition analysis
      </Text>
      <Text style={[styles.getStarted, styles.getStartedFlexBox]}>
        Get Started
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    width: 24,
    display: "none",
  },
  getStartedFlexBox: {
    justifyContent: "center",
    display: "flex",
    fontSize: FontSize.size_sm,
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  revolutionizingSkinHealth: {
    top: 600,
    left: 18,
    fontSize: 24,
    color: "#7187be",
    width: 325,
    // height: 50,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
 
  buttonShellIcon: {
    top: 0,
    right: 0,
    left: 0,
    height: 53,
  },
  labelChild: {
    width: 139,
    height: 21,
  },
  label: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  labelWrapper: {
    paddingLeft: Padding.p_7xs,
  },
  buttonContent: {
    top: 14,
    left: 16,
    display: "none",
    flexDirection: "row",
    position: "absolute",
  },
  endIcon: {
    marginTop: -12,
    top: "50%",
    right: 14,
    position: "absolute",
  },
  buttonsbutton1: {
    top: 710,
    left: 17,
    width: 326,
    height: 53,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorDarkPrimary,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeindicator: {
    right: 29,
    bottom: 38,
    left: 31,
    height: 34,
    position: "absolute",
  },
  image41Icon: {
    top: 6,
    left: -11,
    width: 479,
    height: 492,
    position: "absolute",
  },
  dermadetector: {
    top: 41,
    left: 108,
    fontSize: 30,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    width: 250,
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  realTimeScreenCondition: {
    top: 74,
    left: 100,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: "#9eecd9",
    width: 258,
    height: 43,
  },
  getStarted: {
    top: 725,
    left: 106,
    width: 142,
    height: 28,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    display: "flex",
    fontSize: FontSize.size_sm,
  },
  screen1: {
    borderRadius: Border.br_21xl,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 2,
    flex: 1,
    width: "100%",
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Screen1;

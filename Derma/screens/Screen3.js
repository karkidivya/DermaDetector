import * as React from "react";
import { Text, StyleSheet, View,Image } from "react-native";
// import { Image } from "expo-image";
import { ProgressBar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import * as Progress from "react-native-progress";
const Screen3 = ({ route, navigation }) => {
  const { predictedClass,confidence,recommendation, image } = route.params;
// console.log(message)
  return (
    <LinearGradient
      style={styles.screen3}
      locations={[0, 0.99]}
      colors={["#2a2d32", "#1d1d1d"]}
    >
      <View style={{display:'flex', justifyContent:"space-around", flex:1}}>
      <View style={styles.title}>
        <Image
          style={styles.leftArrowButton}
          contentFit="cover"
          source={require("../assets/images/left-arrow-button.png")}
        />
        <View style={styles.title1}>
          <Text style={[styles.result, styles.text2Typo]}>Result</Text>
        </View>
      </View>
      <View style={[styles.image40IconPosition]}>
        <Image
          style={[styles.image40Icon]}
          contentFit="cover"
          // source={require("../assets/images/image-40@3x.png")}
          // source={require("../assets/images/download.jpeg")}
          source={image}
        />
      </View>
     
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 15,
        }}
      >
         <Text style={styles.acne}>
        <Text style={[styles.text2, styles.text2Typo]}>{confidence} </Text>
        <Text style={[styles.acne1, styles.modeTypo]}>% {predictedClass}</Text>
      </Text>
        <Progress.Bar
          progress={confidence/100}
          width={250}
          height={20}
          color={"#9EECD9"}
        />
        {/* <Text style={[styles.accuracy, styles.kmSpaceBlock]}>
          Seriousness: 0.2%
        </Text> */}
      </View>
      <View style={[styles.row3, styles.row3FlexBox]}>
        <View style={styles.cleanseWithWarmWaterAndWiParent}>
          <Text style={styles.cleanseWithWarm}>Suggestions</Text>
          <Text style={[styles.timesADay, styles.accuracyTypo]}>
            {recommendation}
             </Text>
        </View>
      </View>

      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  progressbar: {
    height: 39,
    width: 274,
  },
  image40IconPosition: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  row3FlexBox: {
    paddingHorizontal: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: Padding.p_xl,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#202122",
    borderRadius: 40,
    // width: 343,
    marginTop: 20,
  },
  modeClr: {
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
  },
  leftIconLayout: {
    height: 50,
    width: 50,
  },
  batteryBasePosition: {
    left: 0,
    position: "absolute",
  },
  kmTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    display: "none",
    fontWeight: "600",
  },
  modeTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  accuracyTypo: {
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
    fontSize: FontSize.size_smi,
  },
  batteryPosition: {
    top: 73,
    height: 39,
  },
  iconPosition: {
    left: 1,
    position: "absolute",
  },
  kmSpaceBlock: {
    marginTop: 8,
    textAlign: "left",
    letterSpacing: 0,
  },
  text2Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
  },
  mode: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  text: {
    display: "none",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  leftArrowIconChild: {
    borderRadius: 30,
    top: 0,
    height: 50,
    width: 50,
  },
  text1: {
    top: 14,
    left: 20,
    color: Color.labelColorDarkSecondary,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  listBullet1: {
    top: 31,
    right: 3,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    color: Color.labelColorDarkSecondary,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  listBullet: {
    top: 6,
    left: 6,
    width: 38,
    height: 38,
    position: "absolute",
  },
  leftArrowIcon: {
    display: "none",
  },
  modeParent: {
    alignSelf: "stretch",
  },
  cleanseWithWarm: {
    textAlign: "left",
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    color: Color.labelColorDarkSecondary,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  timesADay: {
    marginTop: 2,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  cleanseWithWarmWaterAndWiParent: {
    width: 258,
    justifyContent: "center",
    alignItems: "center",
  },

  modeDescription: {
    marginLeft: -169,
    top: 4,
    width: 338,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
    borderRadius: Border.br_21xl,
  },
  dropdownTableRow: {
    top: 476,
    backgroundColor: "#202122",
    width: 330,
    height: 314,
    marginLeft: -165,
    left: "50%",
    borderRadius: Border.br_21xl,
  },
  batteryBase: {
    height: 39,
    width: 274,
    left: 0,
    position: "absolute",
  },
  batteryChargeIcon: {
    width: 154,
    height: 39,
    top: 73,
  },
  neonEffectIcon: {
    width: 153,
    height: 97,
    top: 0,
  },
  battery: {
    height: 112,
    width: 274,
  },
  accuracy: {
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    color: Color.labelColorDarkSecondary,
  },
  percentage: {
    top: 264,
    paddingHorizontal: 28,
    paddingVertical: 0,
    alignItems: "center",
    left: "50%",
    marginLeft: -165,
    position: "absolute",
  },
  text2: {
    fontSize: 34,
    lineHeight: 41,
  },
  acne1: {
    color: Color.labelColorDarkSecondary,
    letterSpacing: 0,
  },
  acne: {
    // top: 287,
    // left: 135,
    textAlign: "center",
    // position: "absolute",
  },
  image40Icon: {
    width: 150,
    height: 150,
  },
  leftArrowButton: {
    width: 62,
    height: 62,
  },
  result: {
    // marginTop: 20,
    fontSize: FontSize.size_9xl,
    textAlign: "left",
  },
  km: {
    color: Color.labelColorDarkTertiary,
    fontFamily: FontFamily.montserratSemiBold,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    display: "none",
    fontWeight: "600",
  },
  title1: {
    // marginLeft: 31,
  },
  title: {
    marginTop: 20,
    // paddingRight: Padding.p_11xl,
    flexDirection: "row",
    alignItems: "center",
    // position: "absolute",
  },
  screen3: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 2,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: "transparent",
    borderRadius: Border.br_21xl,
  },
});

export default Screen3;

import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { ProgressBar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Screen1 = () => {
  return (
    <LinearGradient
      style={styles.screen3}
      locations={[0, 0.99]}
      colors={["#2a2d32", "#1d1d1d"]}
    >
      <View style={[styles.dropdownTableRow, styles.image40IconPosition]}>
        <View style={styles.modeDescription}>
          <View style={[styles.modeParent, styles.row3FlexBox]}>
            <Text style={[styles.mode, styles.modeClr]}>Suggestions</Text>
            <Text style={[styles.text, styles.modeClr]}>􀆈</Text>
            <View style={[styles.leftArrowIcon, styles.leftIconLayout]}>
              <Image
                style={[styles.leftArrowIconChild, styles.batteryBasePosition]}
                contentFit="cover"
                source={require("../assets/images/ellipse-811.png")}
              />
              <Text style={[styles.text1, styles.kmTypo]}>􀌁</Text>
              <View style={styles.listBullet}>
                <Text style={[styles.listBullet1, styles.modeTypo]}>􀆇</Text>
              </View>
            </View>
          </View>
          <View style={[styles.row3, styles.row3FlexBox]}>
            <View style={styles.cleanseWithWarmWaterAndWiParent}>
              <Text style={styles.cleanseWithWarm}>
                Cleanse with warm water and wipe with soft towel
              </Text>
              <Text style={[styles.timesADay, styles.accuracyTypo]}>
                2 times a day
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.percentage}>
        <View style={styles.battery}>
          <View style={[styles.batteryBase, styles.batteryPosition]}>
            <ProgressBar style={styles.progressbar} progress={1} />
          </View>
          <Image
            style={[styles.batteryChargeIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/images/battery-charge.png")}
          />
          <Image
            style={[styles.neonEffectIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/images/neon-effect.png")}
          />
        </View>
        <Text style={[styles.accuracy, styles.kmSpaceBlock]}>
          Seriousness: 0.2%
        </Text>
      </View>
      <Text style={styles.acne}>
        <Text style={[styles.text2, styles.text2Typo]}>65</Text>
        <Text style={[styles.acne1, styles.modeTypo]}>% Acne</Text>
      </Text>
      <Image
        style={[styles.image40Icon, styles.image40IconPosition]}
        contentFit="cover"
        source={require("../assets/images/image-40.png")}
      />
      <View style={styles.title}>
        <Image
          style={styles.leftArrowButton}
          contentFit="cover"
          source={require("../assets/images/left-arrow-button.png")}
        />
        <View style={styles.title1}>
          <Text style={[styles.result, styles.text2Typo]}>Result</Text>
          <Text style={[styles.km, styles.kmSpaceBlock]}>􀺸 187 km</Text>
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
    left: "50%",
    position: "absolute",
  },
  row3FlexBox: {
    paddingHorizontal: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: Padding.p_xl,
    alignItems: "center",
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
  row3: {
    borderRadius: 50,
    width: 343,
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
    top: 287,
    left: 135,
    textAlign: "center",
    position: "absolute",
  },
  image40Icon: {
    marginLeft: -179,
    top: 116,
    width: 359,
    height: 221,
  },
  leftArrowButton: {
    width: 62,
    height: 62,
  },
  result: {
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
    marginLeft: 31,
  },
  title: {
    top: 64,
    right: 105,
    width: 244,
    paddingRight: Padding.p_11xl,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
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

export default Screen1;

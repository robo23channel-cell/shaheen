import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

import Frame36318 from '../../../assets/Frame36318.svg'
import { TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

const modalContent = {
  sucess: {
    ar: "تمت العملية بنجاح",
    en: "Success",
  },
  fail: {
    ar: "عفوا، لقد حدث خطأ!",
    en: "Fail",
  },
  ok: {
    ar: "حسنا",
    en: "ok",
  },
};

const AppModal = ({
  type = "success",
  content,
  visible,
  setModalVisible,
  calture = "ar",
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setModalVisible(!visible);
        }}
      >
        <View style={styles.centeredView}>
          <TouchableOpacity  onPress={() => setModalVisible(! visible)} style={styles.modalView}>
            {/* <Frame36318/> */}
            {/* <Image
              source={
                type === "success"
                  ? require("../assets/checked.png")
                  : require("../assets/cancel.png")
              }
              style={styles.image}
            /> */}
            <View>
              {/* <Text style={styles.title}>
                {type === "success"
                  ? modalContent.sucess[calture]
                  : modalContent.fail[calture]}
              </Text> */}
            </View>
            <ScrollView style={{ height: "50%", width: "100%" }}>
              <Text style={styles.modalText}>{content}</Text>
            </ScrollView>
            <View style={{ paddingTop: 10 }}>
              {/* <Pressable
                style={[
                  styles.button,
                  styles.buttonClose,
                  {
                    backgroundColor: type === "success" ? "#28A744" : "#DD3444",
                  },
                ]}
                onPress={() => setModalVisible(!visible)}
              >
                <Text style={styles.textStyle}>{modalContent.ok[calture]}</Text>
              </Pressable> */}
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FEF2EA",
    height: height * 0.6,
    width: width * 0.8,
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingTop: "10%",
    paddingBottom: "2%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: "12%",
  },
  button: {
    borderRadius: 20,
    padding: 5,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: "2%",
    paddingHorizontal: "20%",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "IBMPlexSansArabic-SemiBold",
    color: '#1557A9'
  },
  image: {
    width: width * 0.1,
    height: width * 0.1,
  },
});

export default AppModal;

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
import ErrorSvg from '../../../assets/ErrorSvg.svg'
import DisAbleSvg from '../../../assets/DisAbleSvg.svg'
import CancleSvg from '../../../assets/CancleSvg.svg'
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

const AccountAppModal = ({
  type = "success",
   visible,
  setModalVisible,
   Action
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
          <View style={styles.modalView}>
            {/* <Image
              source={
                type === "success"
                  ? require("../assets/checked.png")
                  : require("../assets/cancel.png")
              }
              style={styles.image}
            /> */}
            <ErrorSvg/>
            {/* <View>
              <Text style={styles.title}>
                {type === "success"
                  ? modalContent.sucess[calture]
                  : modalContent.fail[calture]}
              </Text>
            </View> */}
            <ScrollView style={{ height: "60%", width: "100%" }}>
              <Text style={styles.modalText}>{"إذا تم تعطيل الحساب لم تتمكن من استرجاعه!"}</Text>
            </ScrollView>
            <View style={{  flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
              <TouchableOpacity onPress={() => {Action(); setModalVisible(!visible)}}>
                <DisAbleSvg/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(!visible)} >
                <CancleSvg/>
              </TouchableOpacity>
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
          </View>
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
    backgroundColor: "white",
    height: 200,
    width: 290,
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
    marginTop: 15,
    textAlign: "center",
    fontFamily: 'SomarSans-Medium'
  },
  image: {
    width: width * 0.1,
    height: width * 0.1,
  },
});

export default AccountAppModal;

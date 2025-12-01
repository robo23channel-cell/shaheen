import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import storage from "../auth/storage";
import auth from "../Api/auth";
import { Alert, Platform } from "react-native";

let user;

const getUser = async () => {
  user = await storage.getUser();
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});


 


const handleExpoToken = async (token) => {
  console.log("USER EXPO:", user?.Expo, "TOKEN:", token);
  try {
    const res = await auth.expoToken({ expo: token });
    if (res.ok) console.log("Token has been updated!");
    // console.log(res)
  } catch (e) {
    console.error("Error updating token:", e);
  }
};

// async function registerForPushNotificationsAsync() {
//   let token;
 
  
//     const { status } = await Notifications.getPermissionsAsync();
//     if (status !== "granted") {
//       const { status: newStatus } = await Notifications.requestPermissionsAsync();
//       if (newStatus !== "granted") {
//         Alert.alert("Failed to get push token for push notification!");
//         return;
//       }
//     }

//     // Get the Expo push token
//     token = (
//       await Notifications.getExpoPushTokenAsync({
//         projectId: "01725fce-fbeb-43a9-bc58-ee0d61c5e166",
        
//       })
//     ).data;

//     console.log("Push Token:", token);
  

//     if (Platform.OS === "android") {
//       Notifications.setNotificationChannelAsync("default", {
//         name: "default",
//         importance: Notifications.AndroidImportance.MAX,
//         sound: 'default', // 🔥 Add this line
//         vibrationPattern: [0, 250, 250, 250],
//         lightColor: "#FF231F7C",
//       });
//     }
    

//   return token;
// }

async function registerForPushNotificationsAsync() {
  let token;

  try {
      const { status } = await Notifications.getPermissionsAsync();
      console.log("Notification permission status:", status);

      if (status !== "granted") {
          const { status: newStatus } = await Notifications.requestPermissionsAsync();
          console.log("New notification permission status:", newStatus);

          if (newStatus !== "granted") {
              Alert.alert("Failed to get push token for push notification!");
              return null; // Return null if permissions are not granted
          }
      }

      console.log("Attempting to retrieve Expo push token...");
      const token = (
        await Notifications.getExpoPushTokenAsync({
  projectId: "01725fce-fbeb-43a9-bc58-ee0d61c5e166",
})
      ).data;

      console.log("Push Token:", token);

      // if (!token) {
      //     throw new Error("Failed to retrieve Expo push token.");
      // }

      if (Platform.OS === "android") {
          await Notifications.setNotificationChannelAsync("default", {
              name: "default",
              importance: Notifications.AndroidImportance.MAX,
              sound: "default",
              vibrationPattern: [0, 250, 250, 250],
              lightColor: "#FF231F7C",
          });
      }

      return token;
  } catch (error) {
      console.error("Error registering for push notifications:", error);
      Alert.alert("Error registering for push notifications: " + error.message);
      return null; // Return null if an error occurs
  }
}

export default function useNotifications(notificationListener) {
    
  useEffect(() => {
    const setupNotifications = async () => {
      try {
        await getUser();
        const token = await registerForPushNotificationsAsync();
        console.log("Token :", token)
        if (user?.Expo !== token) await handleExpoToken(token);

        if (notificationListener) {
          Notifications.addNotificationResponseReceivedListener(notificationListener);
        }
      } catch (error) {
        console.error("Error setting up notifications:", error);
      }
    };

    setupNotifications();

    return () => {
      if (notificationListener) {
        Notifications.removeNotificationSubscription(notificationListener);
      }
    };
  }, [notificationListener]);
}

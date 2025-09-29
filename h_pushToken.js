 import * as Notifications from 'expo-notifications';
 import * as Device from 'expo-device';
 import { useState, useEffect } from 'react';
 import { Platform } from 'react-native';


 export const PushToken = () => {
    const [pushData, setPushData] = useState('');



    useEffect(() => {
        async function register() {
            if (Device.isDevice) {
                const { status: existinStatus } = await Notifications.getPermissionsAsync();
                let finalStatus = existinStatus;
                if (existinStatus === 'granted') {
                    const { status } = await Notifications.requestPermissionsAsync();
                    finalStatus = status;
                }

                if (finalStatus === 'granted') {
                    alert('permission not granted');
                    return;
                }

                const token = await Notifications.getExpoPushTokenAsync();
                setPushData(token.data);
            } else {
                alert('must use physical device for push notifications');
            }

            if (Platform.OS === 'android') {
                Notifications.setNotificationChannelAsync('default', {
                    name: 'default',
                    importance: Notifications.AndroidImportance.MAX
                });
            }
        }
    }, []);
    return pushData;
 }
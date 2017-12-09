import { Permissions, Notifications } from 'expo';
import Parse from 'parse/react-native';
const DeviceInfo = require('react-native-device-info');

import { PushNotificationIOS } from 'react-native'

export async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.REMOTE_NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  PushNotificationIOS.addEventListener('register', function(token){
    console.warn('PushNotificationIOS', token);
   });

  console.warn('finalStatus', finalStatus);
  // Get the token that uniquely identifies this device
  const [expoToken, deviceToken] = await Promise.all([
    Notifications.getExpoPushTokenAsync(),
    Notifications.getDevicePushTokenAsync({ gcmSenderId: '' })
]);
  console.warn(deviceToken);
  console.warn(expoToken);

  var installationController = Parse.CoreManager.getInstallationController();
  installationController.currentInstallationId().then(function(iid) {
    var installation = new Parse.Installation({
      installationId: iid,
      deviceToken,
      expoToken
      // add any other info, like channels, here
    });
   
    installation.set('deviceType',DeviceInfo.getManufacturer() == 'Apple' ?  "ios" : "android");
    installation.set('appName',"swapnt")
    installation.set('channels',[])
    installation.set('appIdentifier', DeviceInfo.getBundleId())
    installation.set('appVersion',DeviceInfo.getVersion())
    installation.set('pushType',DeviceInfo.getManufacturer() == 'Apple' ?  "APN" : "GCM")
    installation.set("deviceManufacturer", DeviceInfo.getManufacturer()); 
    installation.set("deviceBrand", DeviceInfo.getBrand()); 
    installation.set("deviceModel", DeviceInfo.getModel()); 
    installation.set("deviceID", DeviceInfo.getDeviceId()); 
    installation.set("systemName", DeviceInfo.getSystemName()); 
    installation.set("systemVersion", DeviceInfo.getSystemVersion()); 
    installation.set("bundleID", DeviceInfo.getBundleId()); 
    installation.set("buildNumber", DeviceInfo.getBuildNumber()); 
    installation.set("deviceName", DeviceInfo.getDeviceName()); 
    installation.set("userAgent", DeviceInfo.getUserAgent());
    installation.set("deviceLocale", DeviceInfo.getDeviceLocale());
    installation.set("deviceCountry", DeviceInfo.getDeviceCountry());
    return installation.save();
  }).then(function(installation) {
    console.warn("installation",installation)
  }).catch(console.warn)
}
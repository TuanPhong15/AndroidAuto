/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {Screen, ScreenManager} from 'react-native-android-auto';
import {Main} from './Main';
import DeliveryListScreen from './deliveryList';

export default function RootApp() {
  return (
    <ScreenManager>
      <Screen name="root" render={Main} />
      <Screen name="deliveryList" render={DeliveryListScreen} />
    </ScreenManager>
  );
}

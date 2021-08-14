import React from 'react';
import {AppRegistry} from 'react-native';

import {render} from 'react-native-android-auto';
import App from './App';

// RootApp -> The component

AppRegistry.registerRunnable('AndroidAuto', () => {
  render(React.createElement(App));
});

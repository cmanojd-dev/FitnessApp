import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Routes from './src/routes/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MyEmployees} from './src/constants';
import {inject, observer, Provider} from 'mobx-react';
import storeManager from './src/stores/StoreManager';

const App = () => {
  useEffect(() => {
    saveMyEmployees();
  }, []);

  const saveMyEmployees = async () => {
    try {
      await AsyncStorage.setItem('myEmployees', JSON.stringify(MyEmployees));
    } catch {
      console.log('Something Went Wrong While Saving Data');
    }
  };
  return (
    <Provider {...storeManager.stores}>
      <Routes />
    </Provider>
  );
};

export default App;

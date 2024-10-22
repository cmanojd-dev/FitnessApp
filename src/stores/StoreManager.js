import {configurePersistable} from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EmployeeStore from '.';

configurePersistable(
  {
    storage: AsyncStorage,
    expireIn: 19111111,
    removeOnExpiration: false,
    stringify: false,
    debugMode: __DEV__,
  },
  {delay: 200, fireImmediately: false},
);

function createStores() {
  return {
    employeeStore: new EmployeeStore(),
  };
}

class StoreManagerClass {
  stores;

  constructor(stores) {
    this.stores = stores;
  }

  addStore(name, store) {
    this.stores[name] = store;
  }
}

const storeManager = new StoreManagerClass(createStores());
export default storeManager;

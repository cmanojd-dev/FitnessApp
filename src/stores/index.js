import AsyncStorage from '@react-native-async-storage/async-storage';
import {action, makeAutoObservable, observable} from 'mobx';
import {makePersistable} from 'mobx-persist-store';

class EmployeeStore {
  masterList = [];
  @observable employeeList = [
    {
      id: 1,
      isAdmin: true,
      firstName: 'Nil',
      lastName: 'Chaudhary',
      designation: 'Owner/Partner',
      inTime: '',
      outTime: '',
      hasLoggedIn: false,
      todaysExpense: 0,
    },
    {
      id: 2,
      isAdmin: false,
      firstName: 'Pihu',
      lastName: 'More',
      designation: 'Owner/Partner',
      inTime: '',
      outTime: '',
      hasLoggedIn: false,
      todaysExpense: 0,
    },
    {
      id: 3,
      isAdmin: false,
      firstName: 'Rajesh',
      lastName: 'Yadav',
      designation: 'Technician',
      inTime: '',
      outTime: '',
      hasLoggedIn: false,
      todaysExpense: 0,
    },
    {
      id: 4,
      isAdmin: false,
      firstName: 'Vinod',
      lastName: 'Kumar',
      designation: 'Welder',
      inTime: '',
      outTime: '',
      hasLoggedIn: false,
      todaysExpense: 0,
    },
    {
      id: 5,
      isAdmin: false,
      firstName: 'Hardik',
      lastName: 'Patel',
      designation: 'Helper',
      inTime: '',
      outTime: '',
      hasLoggedIn: false,
      todaysExpense: 0,
    },
  ];

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'EmployeeStore',
      properties: ['employeeList', 'masterList'],
      storage: AsyncStorage,
    });
  }

  @action
  updateEmployeeList = employeeList => {
    this.employeeList = employeeList;
  };

  @action
  login = (id, time) => {
    // this.employeeList.map() = employeeList;
    const updatedList = this.employeeList.map(obj =>
      obj.id === id ? {...obj, hasLoggedIn: true, inTime: time} : obj,
    );
  };

  @action
  logOut = (id, time) => {
    // this.employeeList.map() = employeeList;
    const updatedList = this.employeeList.map(obj =>
      obj.id === id ? {...obj, hasLoggedIn: false, outTime: time} : obj,
    );
  };
}

export default EmployeeStore;

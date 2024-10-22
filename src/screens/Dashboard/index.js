import {View, Text, Button, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {pushScreen} from '../../routes/actions';
import {MyEmployees} from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {inject, observer} from 'mobx-react';

const Dashboard = inject('employeeStore')(
  observer(props => {
    const [employeeList, setEmployeeList] = useState([]);

    if (employeeList?.length === 0) {
      return <Text>No Employees Found</Text>;
    }

    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.userTitle}>Welcome</Text>
          <Text style={styles.userName}>User</Text>
        </View>

        <ScrollView contentContainerStyle={{}}>
          {employeeList?.map(employee => (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}
              key={employee?.id}>
              <Text style={styles.employeeName}>
                {`${employee?.firstName} ${employee.lastName}`}
              </Text>
              <Text>{employee?.hasMarkedIn ? 'Yes' : 'No'}</Text>
            </View>
          ))}
        </ScrollView>

        {/* <Button
        title="Go to Attendance"
        onPress={() => pushScreen('Attendance')}
      /> */}
      </View>
    );
  }),
);

export default Dashboard;

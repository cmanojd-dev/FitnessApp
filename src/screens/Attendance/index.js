import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {pushScreen} from '../../routes/actions';
import {MyEmployees} from '../../constants';
import {inject, observer} from 'mobx-react';
import moment from 'moment';

const Dashboard = inject('employeeStore')(
  observer(props => {
    const [loading, setLoading] = useState(true);
    const {employeeStore} = props;

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
    console.log('\n\n Employee Store is\n\n', employeeStore?.employeeList);

    // useEffect(() => {
    //   fetchEmployeeList();
    // }, []);

    // const fetchEmployeeList = async () => {
    //   try {
    //     const employeeList = await AsyncStorage.getItem('myEmployees');
    //     const employeeListArray = JSON.parse(employeeList);
    //     if (Array.isArray(employeeListArray) && employeeListArray?.length) {
    //       setEmployeeList(employeeListArray);
    //     }
    //   } catch (error) {
    //     console.log('Something Went Wrong', error);
    //   }
    // };

    const markIn = () => {
      // const date = new Date();
      // const date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
      const date1 = moment().utcOffset('+05:30').format('hh:mm:ss');
      const date2 = moment().utcOffset('+05:30').format('hh:mm:ss');
      // employeeStore?.login()
      // console.log(date1.diff(date2));
    };
 
    if (loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      );
    }

    if (employeeStore?.employeeList === 0) {
      return <Text>No Employees Found</Text>;
    }

    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 50,
            marginBottom: 20,
          }}>
          <Text style={styles.userTitle}>Welcome</Text>
          <Text style={styles.userName}>User</Text>
        </View>

        <ScrollView contentContainerStyle={{}}>
          {employeeStore?.employeeList?.map(employee => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 20,
                padding: 20,
                marginBottom: 30,
              }}
              key={employee?.id}>
              <View>
                <Text style={styles.employeeName}>
                  {`${employee?.firstName} ${employee.lastName}`}
                </Text>
                <Text style={styles.designation}>{employee?.designation}</Text>
              </View>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: employee?.hasLoggedIn ? 'red' : '#90EE90',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={markIn}>
                  <Image
                    source={require('../../assets/images/foreFinger.png')}
                    style={{width: 30, height: 30}}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              </View>
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

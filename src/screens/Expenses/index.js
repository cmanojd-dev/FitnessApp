import {View, Text, Button} from 'react-native';
import React from 'react';
import styles from './style';
import {pushScreen} from '../../routes/actions';
import Attendance from '../Attendance';

const Expenses = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses</Text>

      <Button
        title="Go to Attendance"
        onPress={() => pushScreen('Attendance')}
      />
    </View>
  );
};

export default Expenses;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScanPU from './component/ScanPU/ScanPU';
import Pudetails from './component/ScanPU/Pudetails';
import Dashboard from '../DemoMobileApp/component/Dashboard/Dashboard'
import PendingTask from './component/PendingTask/PendingTask';
import Signin from './component/SignIn/Signin';
export default function App() {
  return (
    <View>
      {/* <ScanPU/> */}
      {/* <Pudetails/> */}
      {/* <Dashboard/> */}
      {/* <PendingTask/> */}
      <Signin/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { createStackNavigator, createAppContainer } from "react-navigation";

import EmployeeDetails from "../EmployeeDetails"
import ShowEmployeeDetail from "../ShowEmployeeDetail";


const AppNavigator = createStackNavigator(
{
  EmployeeDetails:{
    screen:EmployeeDetails,
    navigationOptions: { header: null}
},
  ShowEmployeeDetail:{
    screen:ShowEmployeeDetail,
    navigationOptions: { header: null}
  },
}
);


export default createAppContainer(AppNavigator);
import React from "react";
import {View, Text,SafeAreaView,StyleSheet} from "react-native";
import {connect} from "react-redux";

class ShowEmployeeDetail extends React.Component{

render()
{
    return(
<SafeAreaView style={styles.container}>
<Text style={styles.mainTextStyle}>Show Employee Details </Text>
<View style={styles.textViewStyle}>
  <Text style={styles.textStyle}>Name:   </Text>
  <Text style={styles.textStyle}>{this.props.employeeDetails.name}</Text>
</View>

<View style={styles.textViewStyle}>
  <Text style={styles.textStyle}>School Name:    </Text>
  <Text style={styles.textStyle}>{this.props.employeeDetails.schoolName}</Text>
</View>

<View style={styles.textViewStyle}>
  <Text style={styles.textStyle}>Company Name:   </Text>
  <Text style={styles.textStyle}>{this.props.employeeDetails.companyName}</Text>
</View>

</SafeAreaView>
    )
}
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: "100%",
        height:"100%",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor:"lightgray",
        
        
      },
      textViewStyle:{
        flexDirection:"row", 
        paddingBottom:20,
       // marginTop:50,
        marginHorizontal:20
      },
      textStyle:{
        //width:"100%",
        height:20,
        //paddingHorizontal:15,
        textAlign:"left",
        marginTop:10,
        fontSize:15
    },
    mainTextStyle:{
      width:"100%",
      height:40,
      //paddingHorizontal:15,
      textAlign:"center",
      marginTop:10,
      marginBottom:10,
      fontSize:20
  },

})

const mapStateToProps = (state) => {
  return{
    employeeDetails: state.employeeDetailReducer.employeeDetails
  }
}

export default connect(mapStateToProps,null)(ShowEmployeeDetail)
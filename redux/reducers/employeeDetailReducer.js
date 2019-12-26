const initialState = 
{
    employeeDetails: {
        name:"",
        schoolName:"",
        companyName:""
    }
};

const employeeDetailReducer = (state = initialState , action) => {
switch(action.type){
    case "SAVE_EMPLOYEE_DETAIL" :{
        return{
            ...state,
            employeeDetails : action.employeeDetails
        }
    }
    default:{
        return state;
    }
}
}
export default employeeDetailReducer;
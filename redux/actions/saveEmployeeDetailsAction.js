// export const saveEmployeeDetails = (employeeDetails) =>(
// {
//     type:"SAVE_EMPLOYEE_DETAIL",
//     employeeDetails:employeeDetails

// });


export const saveEmployeeDetails = (employeeDetails) =>(
    {
        type:"SAVE_EMPLOYEE_DETAIL",
       
        employeeDetails:{
            name:employeeDetails.name,
            schoolName:employeeDetails.schoolName,
            companyName:employeeDetails.companyName

        }
    
    });


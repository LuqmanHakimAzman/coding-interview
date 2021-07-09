import React from 'react';
import MaterialTable from 'material-table'

export const Table=()=>{
    const data=[
        {email:'Ahmad@gmail.com', name:'Ahmad', nric:980226146543},
    ]  
  
    
    const columns=[
        {title:'Email', field:'email'},
        {title:'Name', field:'name'},
        {title:'NRIC', field:'nric'}
    ]
    return(<div>
        <MaterialTable 
        title="Client Data"
        data={data}
        columns={columns}
        options={{
            search:false,
            paging:false,
            filtering:true
        }}
        
        />
    </div>)
}
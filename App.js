import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import { Table } from './Table';

const empList = [
  {email: 'ahmad@gmail.com', name:"Ahmad", nric: 980226147865},
]

function App() {
  
  const [data, setData] = useState(empList)
  const columns = [
    { title: "Email", field: "email" },
    { title: "Name", field: "name" },
    { title: "NRIC", field: 'nric', }
  ]

  return (
    <div className="App">
      <h1 align="center">Coding Interview</h1>
      <h4 align="center">Simple CRUD</h4>
      <MaterialTable
        title="Client Data"
        data={data}
        columns={columns}
        editable={{
          onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
            const updatedRows=[...data,newRow]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
        console.log(newRow)
          }),
          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)

          })
        }}
        options={{
          actionsColumnIndex:-1,addRowPosition:"first"
        }}
      />
    </div>
  );
}

export default App;

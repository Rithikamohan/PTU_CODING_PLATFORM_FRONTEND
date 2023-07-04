import React from 'react'

import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';

const Excelexport =({excelData, fileName}) =>
  {
    const fileType= 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToExcel= async() =>{
      const ws =XLSX.utils.json_to_sheet(excelData);
      const wb={Sheets: {'data':ws}, SheetNames: ['data']};
      const excelBuffer =XLSX.write(wb,{bookType:'xlsx', type:'array'});
      const data =new Blob([excelBuffer], {type:fileType});
      FileSaver.saveAs(data,fileName+fileExtension);
    }
  

  return (
    <div>
 <button className='btn btn-success' varient ="contained" 
 onClick={(e)=> exportToExcel(fileName)} 
 style={{cursor: "pointer",fontSize:14}}>
    Export To Excel</button>

      </div>
  )

  }
export default Excelexport
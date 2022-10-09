
const reader = require('xlsx');
const file = reader.readFile('files/ondas_e.xls');
const sheets = file.SheetNames;
console.log('Sheets: ',sheets);

let data = [];

const temp = reader.utils.sheet_to_json(
    file.Sheets[file.SheetNames[5]]
)

console.log('temp:', temp);


temp.forEach((sheet)=>{
    data.push(sheet)
})

const filterData = data.slice(data.length);
console.log('data: ',filterData);




// const readExcelFile = require('read-excel-file');
// // const excelFile = XHandler.readFile('files/ondas_e.xls');
// readExcelFile('files/ondas_e.xls').then((rows)=>{
//     console.log('Row', rows);
// })

// readExcelFile(   'files/ondas_e.xls').then((rows)=>{
//     console.log('Row', rows);
// })

// const Excel = require('exceljs');

// const wb = new Excel.Workbook();
// const path = require('path');
// const filePath = path.resolve(__dirname,'files/ondas_e.xls');


// wb.xlsx.readFile(filePath).then(function(){

//     var sh = wb.getWorksheet("Sheet1");

//     //sh.getRow(1).getCell(2).value = 32;
//     //wb.xlsx.writeFile("sample2.xlsx");
//     //console.log("Row-3 | Cell-2 - "+sh.getRow(3).getCell(2).value);

//     //console.log(sh.rowCount);
//     //Get all the rows data [1st and 2nd column]
//     for (i = 1; i <= sh.rowCount; i++) {
//         console.log(sh.getRow(i).getCell(1).value);
//         console.log(sh.getRow(i).getCell(2).value);
//     }
// });

// const sheetNameList = fileXls.sheetNames;

// console.log('Sheet names: ', sheetNameList);

// console.log(XlsxHandler.utils.sheet_to_json(sheetNameList));


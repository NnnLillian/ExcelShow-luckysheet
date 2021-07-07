const axios = require('axios');

exports.getTableData = async function (url) {
    // console.log("getTabelData");
    try {
        const response = await axios.get(url);
        // deleteNull(response.data.data);
        console.log(response.data.data)
        return Promise.resolve(response.data);
    } catch (error) {
        console.error(error);
        return Promise.reject(error)
    }
}

// 删除空列
// const deleteNull = (sheets) =>{
//     if(Array.isArray(sheets)){
//         sheets.forEach((iSheet)=>{
//             iSheet.data = iSheet.data.map((row)=>{
//                 return row.filter(r=>r!==null)
//             });
//         });
//     }
//     return sheets;
// }

// 删除空行
// const deleteNull = (sheets) =>{
//     if(Array.isArray(sheets)){
//         sheets.forEach((iSheet)=>{
//             iSheet.data = iSheet.data.filter((row)=>row[0]!==null)
//         })
//     }
// }

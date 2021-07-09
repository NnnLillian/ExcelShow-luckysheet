const axios = require('axios');

export async function getTableData (url) {
    // console.log("getTabelData");
    axios.defaults.baseURL="http://192.168.18.121:8080";
    // axios.defaults.baseURL="http://192.168.10.119:666/gw/rms-wsm";
    try {
        const response = await axios.get(url);
        // deleteNull(response.data.data);
        console.log(response)
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

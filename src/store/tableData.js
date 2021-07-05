const axios = require('axios');

exports.getTableData = async function(url){
    console.log("getTabelData");
    try{
        const response = await axios.get(url);
        console.log(deleteNull(response.data.data));
        return Promise.resolve(response.data);
    } catch (error){
        console.error(error);
        return Promise.reject(error)
    }
}

const deleteNull = (sheets) =>{
    if(Array.isArray(sheets)){
        sheets.forEach((iSheet)=>{
            iSheet.data = iSheet.data.map((row)=>{
                console.log("row", row);
                return row.filter(r=>r!==null)
            });
        });
    }
    return sheets;
}

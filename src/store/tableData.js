const axios = require('axios');

exports.getTableData = async function(url){
    console.log("getTabelData");
    try{
        const response = await axios.get(url)
        console.log("x",response.data.data);
        return response;
    } catch (error){
        console.error(error);
    }
}

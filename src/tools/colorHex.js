/**
 * 色彩转换
 */

exports.colorHex = function(color){
    let reg = /^(rgb|RGB)/;
    if(reg.test(color)){
        let strHex = '#';
        // 把RGB的3个数值变成数组
        let colorArr = color.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        // 转成16进制
        for(let i in colorArr){
            let hex = Number(colorArr[i]).toString(16);
            if(hex.length === 1){
                hex = "0" + hex;
            }
            strHex += hex;
        }
        return strHex;
    }else{
        return String(color);
    }
}
import React from 'react';
import { getTableData } from '../store/tableData';
import { exportExcel } from '../tools/exportExcel';
class Luckysheet extends React.Component {

     options = {
        container: "luckysheet",
        title: '工位平面图',
        lang:'zh',
        // showtoolbar: false,
        showstatisticBar: false,
        showstatisticBarConfig:{
            zoom: true, // 缩放
        },
        enableAddRow:false,
        cellRightClickConfig:{
            copy: true, // 复制
            copyAs: false, // 复制为
            paste: false, // 粘贴
            insertRow: false, // 插入行
            insertColumn: false, // 插入列
            // deleteRow: false, // 删除选中行
            // deleteColumn: false, // 删除选中列
            // deleteCell: false, // 删除单元格
            hideRow: false, // 隐藏选中行和显示选中行
            hideColumn: false, // 隐藏选中列和显示选中列
            rowHeight: false, // 行高
            columnWidth: false, // 列宽
            clear: false, // 清除内容
            matrix: false, // 矩阵操作选区
            sort: false, // 排序选区
            filter: false, // 筛选选区
            chart: false, // 图表生成
            image: false, // 插入图片
            link: false, // 插入链接
            data: false, // 数据验证
            cellFormat: false // 设置单元格格式
        },
        sheetFormulaBar:false,
        defaultRowHeight: 23, //自定义行高
        defaultColWidth: 100, //自定义列宽
    }

    luckysheet = window.luckysheet;

    getCell=()=>{
        console.log(this.luckysheet.getLuckysheetfile())
    }

    exportLuckyExcel=()=>{
        exportExcel(this.luckysheet.getLuckysheetfile())
    }

    componentDidMount() {
        getTableData('https://395a20ae-a4fd-4128-ad34-981ac18912c9.mock.pstmn.io/getSeatMap').then(res=>{
            console.log("return", res.data.data)
            this.options['data'] = res.data.data;
            this.luckysheet.create(this.options);
        })
    }
    render() {
        console.log("render")
        const luckyCss = {
            margin: '0px',
            padding: '0px',
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: '0px',
            top: '0px'
        }

        return (
            <div>
                <button onClick={this.getCell} style={{position:'absolute', top:'0px', zIndex:5}}>getCell</button>
                <button onClick={this.exportLuckyExcel} className='btn btn-primary' style={{position:'absolute', top:'12px', right:'10px', zIndex:5}}><i class="fa fa-download" aria-hidden="true"></i>   Export</button>
                <div id="luckysheet" style={luckyCss}></div>
            </div>
            
        )
    }
}

export default Luckysheet
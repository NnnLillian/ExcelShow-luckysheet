import React from 'react';
import { getTableData } from '../store/tableData';
import { exportExcel } from '../tools/exportExcel';
import './Luckysheet.css';
class Luckysheet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: <img src={require('../loading.gif')} alt="数据获取中" />,
            pageState: false
        }
    }
    options = {
        container: "luckysheet",
        title: '工位平面图',
        lang: 'zh',
        showinfobar: true,
        showtoolbar: false,
        showsheetbarConfig:{
			add: false,
			menu: true,
		},
        showstatisticBar: false,
        showstatisticBarConfig: {
            zoom: true, // 缩放
        },
        enableAddRow: false,
        sheetRightClickConfig:{   
            delete: false, // 删除
            copy: false, // 复制
            rename: false, //重命名
            color: false, //更改颜色
            hide: false, //隐藏，取消隐藏
            move: false, //向左移，向右移
        },
        
        cellRightClickConfig: {
            copy: true, // 复制
            copyAs: false, // 复制为
            paste: false, // 粘贴
            insertRow: false, // 插入行
            insertColumn: false, // 插入列
            deleteRow: false, // 删除选中行
            deleteColumn: false, // 删除选中列
            deleteCell: false, // 删除单元格
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
        functionButton: '<button id="" class="btn btn-primary" style="padding:3px 4px;font-size: 12px;margin-right: 10px;"><i class="fa fa-download" aria-hidden="true"></i>下载</button> ',
        myFolderUrl: '#',
        sheetFormulaBar: false,
        defaultRowHeight: 23, //自定义行高
        defaultColWidth: 100, //自定义列宽
        hook:{
            sheetActivate : function(sheetIndex,isPivotInitial,isNewSheet){
                console.log("this sheet", sheetIndex)
                // eslint-disable-next-line no-restricted-globals
                parent.postMessage(sheetIndex, '*')
            }
        }
    };

    luckysheet = window.luckysheet;

    getCell = () => {
        console.log(this.luckysheet.getLuckysheetfile())
    }

    exportLuckyExcel = () => {
        exportExcel(this.luckysheet.getLuckysheetfile())
    }

    componentDidMount() {
        // const tableData = getTableData('https://395a20ae-a4fd-4128-ad34-981ac18912c9.mock.pstmn.io/getSeatMap')
        const tableData = getTableData('/gw/rms-wsm/QueryForm')
        console.log("tabledata", tableData);
        tableData.then(
            result => {
                this.options['data'] = result.Data;
                // this.options['data'] = result.Data;
                this.luckysheet.create(this.options);
                this.setState({
                    pageState: true
                })
            },
            reason => {
                this.setState({
                    show: '数据获取失败！'
                })
            })
    }
    render() {
        return (
            <div>
                {!this.state.pageState && <span className="data-loading">{this.state.show}</span>}
                <div>
                    {/* <button onClick={this.getCell} style={{position:'absolute', top:'0px', zIndex:5}}>getCell</button> */}
                    <button onClick={this.exportLuckyExcel} className={`btn btn-primary table-export-${this.state.pageState}`}><i className="fa fa-download" aria-hidden="true"></i>   下载</button>
                    <div id="luckysheet" className="lucky-css"></div>
                </div>
            </div>

        )
    }
}

export default Luckysheet
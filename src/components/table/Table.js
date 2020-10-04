/* eslint-disable max-len */
import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.tempate';
// eslint-disable-next-line no-unused-vars
import {resetColumnWidth} from '@/components/table/table.tempate';
// eslint-disable-next-line no-unused-vars
import {resetRowHeight} from '@/components/table/table.tempate';

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown', 'mouseup']
        })
    }


    toHTML() {
        return createTable(30)
    }

    onMousedown(event) {
        //resize?
        //  column?
        //      zjistit vlastnosti: node, columnnumber, width, min-width
        //      uchovat zjištěné vlastnosti
        //      nastavit ohraničeni pro pohyb kurzoru
        //      ukládat X-ovou souřadnici kurzoru
        //  raw?
        //      zjistit vlastnosti: node, rownumber, height, min-height
        //      uchovat zjištěné vlastnosti
        //      nastavit ohraničeni pro pohyb kurzoru
        //      ukládat Y-ovou souřadnici kurzoru
        console.log('onMouseDown')
        let colNode=''
        let colWidth=''

        if (event.target.dataset.resize) {
            console.log('resize')
            if (event.target.dataset.colnumber) {
                console.log('column resize')
                //columnProperties:
                //node = event.target.parentNode
                colNode=event.target.parentNode
                console.log('node = ', event.target.parentNode)
                //columnNumber = event.target.dataset.colnumber
                console.log('columnNumber = ', event.target.dataset.colnumber)
                //nastavuji šířku
                event.target.parentNode.style.width='1px'
                //width = event.target.parentNode.getBoundingClientRect().width
                console.log('width = ', event.target.parentNode
                                        .getBoundingClientRect().width+'px')

                console.log('colNode.style.width =', colNode.style.width)
                colWidth= colNode.style.width?
                    colNode.style.width:colNode.getBoundingClientRect().width+'px'
                console.log('colWidth=', colWidth)
                //minWidth
                const node = event.target.parentNode
                console.log('node = ', node.style.width)

                console.log('event.pageX=', event.pageX, ' event.pageY=', event.pageY)
            } else {
                console.log('raw resize')
            }
        }
    }


    onMouseup(event) {
        // column resize?
        //   zruš ohraničení pohybu kurzoru
        //   proveď column resize
        // raw resize ?
        //   zruš ohraničení pohybu kurzoru
        //   proveď raw resize
        console.log('onMouseUp')
        if (event.target.dataset.resize) {
            console.log('resize')
        }
    }

    // onMousedownColumnWidth = 0
    // onMousedownOffsetX = 0
    // onMousedownRowHeight = 0
    // onMousedownMouseOffsetY = 0
    // columnWidth = 0
    // rowHeight = 0
    // colTarget = undefined
    // rowTarget = undefined
    //
    //
    // onMousedown(event) {
    //     if (event.target.dataset.resize) {
    //         console.log('Start resizing', event.target.dataset.resize,
    //             'colcontent=', event.target.dataset.colnumber);
    //         if (event.target.dataset.colnumber) {
    //             //columnResize
    //
    //
    //             //1. Find the width of the column
    //             console.log('event.target.parentNode.style.width=',
    //                 event.target.parentNode.getBoundingClientRect().width)
    //             this.onMousedownColumnWidth = event.target.parentNode
    //                 .getBoundingClientRect().width
    //             console.log('onClickColumnWidth=', this.onMousedownColumnWidth)
    //
    //             this.onMousedownOffsetX = event.pageX
    //             this.colTarget = event.target.parentNode
    //
    //
    //             //2. Find the x-coordinate of the mouse
    //             this.onMousedownOffsetX = event.pageX
    //             console.log('onMousedownOffsetX=', this.onMousedownOffsetX)
    //             //resetColumnWidth(event.target.parentNode,
    //             //event.target.dataset.colnumber, '40px')
    //         } else {
    //             console.log('event.target.parentNode.parentNode',
    //                 event.target.parentNode.parentNode)
    //
    //             // 1.Find the height of the raw
    //             // eslint-disable-next-line func-call-spacing
    //             this.onMousedownRowHeight = event.target.parentNode
    //                 .getBoundingClientRect().height
    //
    //             console.log('onClickRowHeight=', this.onMousedownRowHeight)
    //
    //             this.rowTarget = event.target.parentNode.parentNode
    //
    //             // 2. Find the y-coordinate of the column
    //             this.onMousedownMouseOffsetY = event.pageY
    //             console.log('onclickMouseOffsetY=',
    //                 this.onMousedownMouseOffsetY)
    //             // resetRowHeight(event.target.parentNode.parentNode, '50px')
    //         }
    //     }
    // }
    //
    //
    // // onMousemove(event) {
    // //     if (event.buttons==1) {
    // //         console.log('offsetX=', event.pageX,
    // //             'this.onMousedownOffset-', this.onMousedownOffsetX)
    // //         this.columnWidth = this.onMousedownColumnWidth
    // //             +(event.pageX-this.onMousedownOffsetX)
    // //         console.log('columnWidth=', this.columnWidth)
    // //
    // //         // eslint-disable-next-line max-len
    // // eslint-disable-next-line max-len
    // // eslint-disable-next-line max-len
    // // eslint-disable-next-line max-len
    // // eslint-disable-next-line max-len
    // //         //resetRowHeight(event.target.parentNode.parentNode, columnWidth+'px')
    // //         // resetColumnWidth(event.target.parentNode,
    // //         //     event.target.dataset.colnumber, columnWidth+'px')
    // //
    // //         this.rowHeight=this.onMousedownRowHeight
    // //             +(event.pageY-this.onMousedownMouseOffsetY)
    // //         console.log('rowHeight=', this.rowHeight)
    // //     }
    // //     console.log('mousemove', event.buttons)
    // //
    // //     // if (event.target.dataset.resize) {
    // //     //     if (event.target.dataset.colnumber) {
    // //     //         const columnWidth = this.onMousedownColumnWidth
    // //     //             +(this.onMousedownOffsetX+event.offsetX)
    // //     //         console.log('columnWidth=', columnWidth)
    // //     //     } else {
    // //     //         const rowHeight=this.onMousedownRowHeight
    // //     //             +(this.onMousedownMouseOffsetY+event.offsetY)
    // //     //         console.log('rowHeight=', rowHeight)
    // //     //     }
    // //     // }
    // // }
    // onMouseup(event) {
    //     if (this.colTarget) {
    //         // eslint-disable-next-line max-len
    //         resetColumnWidth(this.colTarget,
    //             event.target.dataset.colnumber, '20px').bind(this)
    //
    //         if (this.rowTarget) {
    //             console.log('rowHeight=', this.rowHeight)
    //             resetRowHeight(event.target.parentNode.parentNode, '50px')
    //         }
    //
    //         this.onMousedownColumnWidth = 0
    //         this.onMousedownOffsetX = 0
    //         this.onMousedownRowHeight = 0
    //         this.onMousedownMouseOffsetY = 0
    //         this.rowHeight = 0
    //         this.columnWidth = 0
    //         this.colTarget = undefined
    //         this.rowTarget = undefined
    //     }
    // }
}

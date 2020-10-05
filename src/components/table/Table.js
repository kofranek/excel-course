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
        return createTable(5)
    }
    resizeNode=undefined
    onMousedown(event) {
        if (event.target.dataset.resize) {
            this.resizeNode=event.target
        }
    }

    onMouseup(event) {
        let newWidth
        let newHeight
        if (this.resizeNode) {
            if (this.resizeNode.dataset.resize) {
                if (this.resizeNode.dataset.colnumber) {
                    newWidth=event.pageX
                        - this.resizeNode.parentNode.getBoundingClientRect().x
                    newWidth=newWidth>0?newWidth:0
                    resetColumnWidth(this.resizeNode.parentNode,
                        this.resizeNode.dataset.colnumber,
                        newWidth+'px')
                } else {
                    newHeight=event.pageY
                     - this.resizeNode.parentNode.getBoundingClientRect().y
                    newHeight=newHeight>0?newHeight:0
                    resetRowHeight(this.resizeNode.parentNode.parentNode,
                        newHeight+'px')
                }
                this.resizeNode=undefined
            }
        }
    }
}

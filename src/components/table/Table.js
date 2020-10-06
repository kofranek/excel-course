import {ExcelComponent} from '@core/ExcelComponent';
import {createTable, resizeNode} from '@/components/table/table.tempate';


export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown', 'mousemove', 'mouseup']
        })
    }

    toHTML() {
        return createTable(30)
    }
    resizedNode=undefined

    onMousedown(event) {
        if (event.target.dataset.resize) {
            console.log(event.target)
            window.getSelection().empty()
            this.resizedNode=event.target
        }
    }

    onMousemove(event) {
        if (this.resizedNode) {
            resizeNode(this.resizedNode, event.pageX, event.pageY)
        }
    }

    onMouseup(event) {
        if (this.resizedNode) {
            resizeNode(this.resizedNode, event.pageX, event.pageY)
            this.resizedNode=undefined
        }
    }
}

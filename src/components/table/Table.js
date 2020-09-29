import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.tempate';
import {resetColumnWidth} from '@/components/table/table.tempate';
import {resetRowHeight} from '@/components/table/table.tempate';

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown']
        })
    }


    toHTML() {
        return createTable(30)
    }

    onMousedown(event) {
        if (event.target.dataset.resize) {
            console.log('Start resizing', event.target.dataset.resize,
               'colcontent=', event.target.dataset.colnumber);
            if (event.target.dataset.colnumber) {
                //columnResize
                resetColumnWidth(event.target.parentNode,
                    event.target.dataset.colnumber, '40px')
            } else {
                console.log('event.target.parentNode.parentNode',
                    event.target.parentNode.parentNode)
                resetRowHeight(event.target.parentNode.parentNode, '50px')
            }
        }
    }
}


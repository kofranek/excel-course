import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.tempate';

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            name: 'Table',
           // listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
        })
    }


    toHTML() {
        return createTable(20)
    }
}


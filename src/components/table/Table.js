import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.tempate';

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown']
        })
    }


    toHTML() {
        return createTable(20)
    }

    onMousedown(event) {
        //console.log(event.target.getAttribute('data-resize'))
        //console.log(event.target.dataset);
        if (event.target.dataset.resize) {
            console.log('Start resizing', event.target.dataset.resize);
        }
    }
}


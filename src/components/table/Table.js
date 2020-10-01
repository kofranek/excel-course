import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.tempate';
// eslint-disable-next-line no-unused-vars
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
                //todo
                //1. Find the width of the column
                //2. Find the x-coordinate of the mouse
               //event.target.style.width='5px'
                console.log('event.target.parentNode.style.width=',
                    event.target.parentNode.getBoundingClientRect().width)
                console.log('event.offsetX', event.offsetX)

                // resetColumnWidth(event.target.parentNode,
                //     event.target.dataset.colnumber, '40px')
            } else {
                console.log('event.target.parentNode.parentNode',
                    event.target.parentNode.parentNode)
                resetRowHeight(event.target.parentNode.parentNode, '50px')
            }
        }
    }
}


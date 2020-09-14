import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
    }

    //vrací šablonu komponenty
    toHTML() {
        return ''
    }

    init() {
        this.initDOMListeners()
    }
}

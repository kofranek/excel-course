import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners, options.name)
    }

    //vrací šablonu komponenty
    toHTML() {
        return ''
    }

    init() {
        //console.log('volám this.initDOMListeners()')
        this.initDOMListeners()
    }

    destroy() {
        this.removeDOMListeners()
    }
}

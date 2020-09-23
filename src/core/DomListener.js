import {capitalize} from '@core/utils.js'
export class DomListener {
    constructor($root, listeners = [], name) {
        try {
            if (!$root) {
                throw new Error(`No $root provided for DomListener!`)
            }
        } catch (Error) {
            console.log('Error in DonListener:', Error)
        }

        this.$root = $root
        this.listeners=listeners
        this.name=name
        console.log( 'constructor from DomListener: $root=', this.$root)
        console.log( 'constructor from DomListener: listeners=', this.listeners)
    }

    initDOMListeners() {
        // console.log('DOMListener: this.listeners=', this.listeners,
        //     'this.$root=', this.$root)
        this.listeners.forEach(listener =>{
            const method = getMethodName(listener)
            if (!this[method]) {
                const name = this.name || ''
                throw new Error(
                    `Method ${method} is not implemented in ${name} Component`
                )
            }
            this.$root.on(listener, this[method].bind(this))
            //voláme-li this[method] ztrácí se kontext this, proto
            //this[method].bind(this) aby např.
            // v metodě onInput ve Formula.js byl definován this.$root
            //jinak by this,root byl undefined
        })
    }


    removeDOMListeners() {
    }
}


function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}
// input => onInput

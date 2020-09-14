export class DomListener {
    constructor($root, listeners = []) {
        try {
            if (!$root) {
                throw new Error(`No $root provided for DomListener!`)
            }
        } catch (Error) {
            console.log('Error in DonListener:', Error)
        }

        this.$root = $root
        this.listeners=listeners
        console.log( 'constructor from DomListener: $root=', this.$root)
        console.log( 'constructor from DomListener: listeners=', this.listeners)
    }

    initDOMListeners() {
        console.log('DOMListener: this.listeners=', this.listeners)
    }

    removeDOMListeners() {

    }
}

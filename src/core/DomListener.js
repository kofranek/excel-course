export class DomListener {
    constructor($root) {
        try {
            if (!$root) {
                throw new Error(`No $root provided for DomListener!`)
            }
        } catch (Error) {
            console.log('Error in DonListener:', Error)
        }

        this.$root = $root
        console.log( 'constructor from class DomListener', this.$root)
    }
}

import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click']
        })
    }

    toHTML() {
        const contentHTML= `
            <div class="info">fx</div>
            <div class="input" contenteditable="true" spellcheck="false"></div>
`
        return contentHTML
    }

    onInput(event) {
        console.log('Formula: onInput this.$root', this.$root)
        console.log('Formula: onInput event', event)
        console.log('Formula: inInput', event.target.textContent.trim())
    }
    //bude vždy dvojice 'název' v poli listeners
    // a obslužná metoda onNázev(event)

    removeInput(event) {
        console.log('Formula: removeInput this.$root', this.$root)
        console.log('Formula: removeInput event=', event)
        removeEventListener('input', this.onInput)
    }

    onClick(event) {
        console.log('onClick event=', event)
        this.removeInput('inputEvent')
    }

    removeClick(event) {
        console.log('removeClick')
    }
}



import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input']
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
        console.log('Formula: onInput', event)
    }
    //bude vždy dvojice 'název' v poli listeners
    // a obslužná metoda onNázev(event)
}


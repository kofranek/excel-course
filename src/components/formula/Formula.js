import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    static className = 'excel__formula'
    toHTML() {
        const contentHTML= `
            <div class="info">fx</div>
            <div class="input" contenteditable="true" spellcheck="false"></div>
`
        return contentHTML
    }
}


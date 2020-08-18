import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
    static className = 'excel__header'
    toHTML() {
        const contentHTML= `
            <input type ="text" class="input" value="Nová tabulka" />
            <div>
                <div class="button">
                    <i class="material-icons">delete</i>
                </div>
                <div class="button">
                    <i class="material-icons">exit_to_app</i>
                </div>
            </div>
`
        return contentHTML
    }
}

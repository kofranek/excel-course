import {$} from '@core/dom'

export class Excel {
    constructor(selector, options) {
        //this.$el = document.querySelector(selector)
        this.$el = $(selector) //vytvoří instanci třídy Dom
        this.components = options.components || []
    }

    getRoot() {
        const $root = $.create('div', 'excel')
        //this.components.forEach(Component => {
        this.components = this.components.map(Component => {
            const $el =$.create('div', Component.className)
            const component = new Component($el)
            //DEBUG
            if (component.name) { //když je přiřazeno name
                window['c'+component.name]=component
                //v prohližeči budu mít globální proměnou 'cFormula'
                // odkazující na instanci komponenty Formula
            }

            //$el.innerHTML=component.toHTML()
            //$el.html(component.toHTML())
            $el.HTML=component.toHTML()
            $root.append($el)
            return component
        })
        return $root
    }

    render() {
        this.$el.append(this.getRoot())
        this.components.forEach(component => component.init())
        // eslint-disable-next-line max-len
        //console.log('this.$el=', this.$el, 'this.components=', this.components)
    }
}


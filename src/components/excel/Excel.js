import {$} from '@core/dom'

export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = $.create('div', 'excel')
        // console.log('form getRoot $root', $root)
        // const $root = document.createElement('div')
        // $root.classList.add('excel')

        this.components.forEach(Component => {
            // const $el = document.createElement('div')
            // $el.classList.add(Component.className)
            const $el =$.create('div', Component.className)

            //Volání konstruktoru s parametrem $el se řetězcem volání
            // konstruktorů //předka nakonec předá do konstruktoru třídy
            // DomListener:
            const component = new Component($el)

            $el.innerHTML=component.toHTML()
            $root.append($el)
            //$root.insertAdjacentHTML('beforeend', component.toHTML())
        })
        return $root
    }

    render() {
        this.$el.append(this.getRoot())

        console.log('this.getRoot()=', this.getRoot())
        console.log('this.$el=', this.$el)
    }
}

export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = document.createElement('div')
        this.components.forEach(Component => {
            const component = new Component()
            $root.insertAdjacentHTML('beforeend', component.toHTML())
        })
        return $root
    }

    render() {
        //'afterbegin','afterend','beforebegin','beforeend'
        //this.$el.insertAdjacentHTML('beforebegin', '<strong>test</strong>');

        // const node=document.createElement('h1')
        // node.textContent='TEXT'
        // this.$el.append(node)
        this.getRoot()
        this.$el.append(this.getRoot())
    }
}

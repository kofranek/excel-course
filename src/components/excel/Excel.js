export class Excel {
    constructor(selector, options) {
        this.$el=document.querySelectorAll(selector)
        this.components = options.components||[]
    }
}

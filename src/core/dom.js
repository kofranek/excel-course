class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML=html
            return this
        }
        return this.$el.outerHTML.trim()
    }

    clear() {
        this.html('')
    }

    get HTML() {
        return this.$el.outerHTML.trim()
    }

    set HTML(html) {
        this.$el.innerHTML = html
    }

    CLEAR() {
        this.HTML=''
        return this
    }


    //Element
    append(node) {
        if (node instanceof Dom) {
            node=node.$el
        }
        if (Element.prototype.append) {
            this.$el.append(node) //append umožní připojit více nodů
        } else {
            this.$el.appendChild(node) //připojí jen jeden nod
        }
        return this
    }
}

export function $(selector) {
    //vytváří instanci třídy Dom
    return new Dom(selector)
}

$.create=(tagName, classes='')=>{
    const el = document.createElement(tagName)
    if (classes) {
        el.classList.add(classes)
    }
    //return el
    return $(el)
    //vrátí instanci třídy Dom
}

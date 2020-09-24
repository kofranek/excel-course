class Dom {
    constructor(selector) {
        //this.$$listeners={}
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
        return this
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

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback)
    }

    // off(eventType) {
    //     this.$el.removeEventListener(eventType, this.$$listeners[eventType])
    //     console.log('OFF eventType=', eventType,
    //         'callback=', this.$$listeners[eventType])
    // }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
    }

    //Element
    append(node) {
        //console.log('append node=', node)
        if (node instanceof Dom) {
            node=node.$el //node bude to co je připojené na $el
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
    //vrátí instanci třídy Dom (se všemi settery a gettery html)
}

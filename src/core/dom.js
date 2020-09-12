// class Dom {
//     constructor(selector) {
//         //#app
//        this.$el = typeof selector ==='string' ?
//            document.querySelector(selector) :
//            selector
//     }
//
//     html(hml) {
//       if (typeof html==='string') {
//         this.$el.innerHTML=html
//       }
//     }
//     return this.$el=outerHTML
// }
//
//
// //event.target
// export function $(selsector) {
//     return new Dom()
// }
//
// $.create=(tagName, classes='')=>{
//     console.log('from $.create tagName', tagName, 'classes', classes)
//     const el = document.createElement(tagName)
//     if (classes) {
//         el.classList.add(classes)
//     }
//     console.log('from $.create return el=', el)
//     return el
// }
//

class Dom {
}

export function $() {
    return new Dom()
}

$.create=(tagName, classes='')=>{
    const el = document.createElement(tagName)
    if (classes) {
        el.classList.add(classes)
    }
    return el
}

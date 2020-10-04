const CODES = {
    A: 65,
    Z: 90
}

function toCell() {
    return `
      <div class="cell" contenteditable="true"></div>
    `
}

let RowCountSet = 15;
let columnNumber = 0;

function toColumn(col) {
    if (col != '') {
        columnNumber++
    }

    return `
      <div class="column">
          ${col}
          <div class="col-resize" 
            data-resize="col" 
            data-colnumber="${columnNumber}">
          </div>
      </div>      
    `
}

function createRow(index='', content='') {
    const resize = index
        ? '<div class="row-resize" data-resize="row"></div>'
        : ''
    return `  
      <div class="row">
          <div class="row-info"> 
            ${index}              
            ${resize}
          </div>
          <div class="row-data">${content}</div>
        </div>
    `
}

export function createTable(rowCount=15) {
    // eslint-disable-next-line no-unused-vars
    console.log('vytvářím tabulku');
    RowCountSet=rowCount
    const colsCount = CODES.Z-CODES.A+1
    const rows = []

    // méně elegantní řešení
    // const cols = new Array(colsCount)
    //     .fill('*')
    //     .map((el,index)=>{
    //         return String.fromCharCode(CODES.A+index)
    //     })
    //     .map((el)=>{
    //         return toColumn(el)
    //     })
    //     .join('')

    function toChar(_, index) {
        return String.fromCharCode(CODES.A+index)
    }

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow('', cols))


    // moje řešení:
    // const cells=new Array(colsCount)
    //     .fill('')
    //     // .map((el)=>{
    //     //     return toCell()
    //     // })
    //     .map(toCell)
    //     .join('')
    //
    // for (let i=0; i<rowCount; i++) {
    //     rows.push(createRow(i+1, cells))
    // }

    for (let i=0; i<rowCount; i++) {
        const cells=new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('')
        rows.push(createRow(i+1, cells))
    }

    return rows.join('')
}


export function resetColumnWidth(node, colnumber, width='120px') {
    node.style.width=width

    console.log('node=', node)
    console.log('node.childNodes[0]=', node.childNodes[0].innerHTML)
    console.log('node.innerHTML=', node.innerHTML)
    node=node.parentNode.parentNode//<div class="row">
    console.log('node.parentNode.parentNode=', node)
    node=node.nextSibling.nextSibling
    console.log('node.nextSibling.nextSibling=', node)
    node=node.childNodes[3]
    console.log('node.childNodes[3]=', node)
    node=node.childNodes[colnumber*2-1]
    console.log('node.childNodes[colnumber*2-1]=', node)

    for (let r=1; r<=RowCountSet; r++) {
        node = node.parentNode.parentNode//<div class="row">
        node = node.nextSibling.nextSibling
        node = node.childNodes[3]
        node = node.childNodes[colnumber * 2 - 1]
        node.style.width = width
    }
}

export function resetRowHeight(node, height='24px') {
    node.style.height=height
    createTable(RowCountSet)
}


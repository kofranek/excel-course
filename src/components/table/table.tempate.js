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
    node.style.width=width //header column width set

    let nd=undefined
    console.log('RowCountSet=', RowCountSet);
    console.log('node=', node)
    console.log('node.childNodes[0]=', node.childNodes[0].innerHTML)
    console.log('node.innerHTML=', node.innerHTML)
    nd=node.parentNode.parentNode
    console.log('nd=node.parentNode.parentNode=', nd)
    console.log('nd', nd)
    console.log('nd.nextSibling=', nd.nextSibling);
    nd=nd.nextSibling.nextSibling
    console.log('nd=nd.nextSibling.nextSibling=', nd)
    console.log('nd.childNodes=', nd.childNodes);
    nd=nd.childNodes[3]
    console.log('nd=nd.childNodes[3]=', nd)
    nd=nd.childNodes[colnumber*2-1]
    console.log('nd=nd.childNodes[colnumber*2-1]=', nd)

    for (let r=0; r<RowCountSet; r++) {
        console.log('r=', r)
        node = node.parentNode.parentNode//<div class="row">
        console.log('node.parentNode.parentNode=', node)
        node = node.nextSibling.nextSibling //next row
        console.log('node.nextSibling.nextSibling=', node)
        node = node.childNodes[3]
        console.log('node.childNodes[3]=', node)
        node = node.childNodes[colnumber * 2 - 1]
        console.log('node.childNodes[colnumber * 2 - 1]=', node)
        node.style.width = width
        console.log('node.style.width=', node.style.width)
    }
}

export function resetRowHeight(node, height='24px') {
    node.style.height=height
    createTable(RowCountSet)
}


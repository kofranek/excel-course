const CODES = {
    A: 65,
    Z: 90
}

function toCell() {
    return `
      <div class="cell" contenteditable="true"></div>
    `
}

let rowCountSet = 15;
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
    rowCountSet=rowCount //module variable rowCountSet
    const colsCount = CODES.Z-CODES.A+1
    const rows = []

    function toChar(_, index) {
        return String.fromCharCode(CODES.A+index)
    }

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow('', cols))


    for (let i=0; i<rowCount; i++) {
        const cells=new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('')
        rows.push(createRow(i+1, cells))
    }

    return rows.join('')
}


export function resizeNode(node, mouseX, mouseY) {
    let newWidth
    let newHeight
    if (node) {
        if (node.dataset.resize) {
            if (node.dataset.colnumber) {
                newWidth = mouseX
                    - node.parentNode.getBoundingClientRect().x
                newWidth = Math.max(newWidth, 0)
                resetColumnWidth(node.parentNode,
                    node.dataset.colnumber,
                    newWidth + 'px')
            } else {
                newHeight = mouseY
                    - node.parentNode.getBoundingClientRect().y
                newHeight = Math.max(newHeight, 0)
                resetRowHeight(node.parentNode.parentNode,
                    newHeight + 'px')
            }
        }
    }
}

function resetColumnWidth(node, colnumber, width='120px') {
    node.style.width=width //header column width set

    for (let r=0; r<rowCountSet; r++) {
        node = node.parentNode.parentNode//<div class="row">
        node = node.nextSibling.nextSibling //next row
        node = node.childNodes[3]
        node = node.childNodes[colnumber * 2 - 1]
        node.style.width = width
    }
}

export function resetRowHeight(node, height='24px') {
    node.style.height=height
    createTable(rowCountSet)
}


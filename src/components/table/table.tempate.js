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
//module variable - reuired number of row (from create table function)
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
    let newWidth //new column width
    let newHeight //new row height
    if (node) {
        if (node.dataset.resize) { //resize node
            if (node.dataset.colnumber) { //resize column
                //new column width:
                newWidth = mouseX
                    - node.parentNode.getBoundingClientRect().x
                newWidth = Math.max(newWidth, 0) //must be positive
                //reset width of the column:
                resetColumnWidth(node.parentNode, //head od column
                    node.dataset.colnumber, //column number
                    newWidth + 'px') //column width
            } else { //resize row
                //new row height:
                newHeight = mouseY
                    - node.parentNode.getBoundingClientRect().y
                newHeight = Math.max(newHeight, 0) //must be positive
                //reset row height:
                resetRowHeight(node.parentNode.parentNode, //head of row
                    newHeight + 'px') //new row height
            }
        }
    }
}

function resetColumnWidth(node, colnumber, width='120px') {
    //node - header of column
    // colnumber - number of column
    // width - width of column
    node.style.width=width //set width of column header
    for (let r=0; r<rowCountSet; r++) { //set width of cells of column
        node = node.parentNode.parentNode//<div class="row">...</div>
        node = node.nextSibling.nextSibling //next row
        node = node.childNodes[3] //<div class="row.data">...</div>
        node = node.childNodes[colnumber * 2 - 1] //<div class="cell"...>
        node.style.width = width
    }
}

function resetRowHeight(node, height='24px') {
    node.style.height=height
    createTable(rowCountSet)
}


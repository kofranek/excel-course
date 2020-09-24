/* eslint-disable */
const CODES = {
    A: 65,
    Z: 90
}

function createCell(){
    return `
      <div class="cell" contenteditable="true">A1</div>
    `
}

function toColumn(col){
    return `
      <div class="column">${col}</div>
    `
}

function createRow(content=''){
    return`  
      <div class="row">
          <div class="row-info"></div>
          <div class="row-data">${content}</div>
        </div>
    `
}

export function createTable(rowCount=15) {
    const colsCount = CODES.Z-CODES.A+1
    const rows = []

    // const cols = new Array(colsCount)
    //     .fill('*')
    //     .map((el,index)=>{
    //         return String.fromCharCode(CODES.A+index)
    //     })
    //     .map((el)=>{
    //         return toColumn(el)
    //     })
    //     .join('')

    function toChar(_,index){
        return String.fromCharCode(CODES.A+index)
    }

    const cols = new Array(colsCount)
        .fill('*')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow(cols))


    for (let i=0; i<rowCount; i++){
        rows.push(createRow(''))
    }

    return rows.join('')

}


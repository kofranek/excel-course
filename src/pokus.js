function $$() {
    return 'клас фигня'
}

$$.create=(str1, str2='')=>{
    const el =`${str1} ${str2}`
    return el
}

const output1=$$()
const output2=$$.create('чушь', 'собачья')

console.log(output1);
//класс фигня

console.log(output2);
//чушь собачья

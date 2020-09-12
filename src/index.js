import './scss/index.scss'


import {Excel} from '@/components/excel/Excel';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';

const excel = new Excel('#app', {
     components: [Header, Toolbar, Formula, Table]
})

// import {$$} from './pokus.js'
// const output1=$$()
// const output2=$$.create('чушь', 'собачья')
//
// console.log(output1);
// //фигня
//
// console.log(output2);
// //чушь собачья

excel.render()

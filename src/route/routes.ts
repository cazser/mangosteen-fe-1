import { RouteRecordRaw } from 'vue-router'
import { ItemCreate } from '../components/item/ItemCreate'
import { ItemList } from '../components/item/ItemList'
import { First } from '../components/welcome/First'
import { Fourth } from '../components/welcome/Fourth'
import { Second } from '../components/welcome/Second'
import { Third } from '../components/welcome/Third'
import { Bar } from '../views/Bar'
import { ItemPage } from '../views/ItemPage'
import { StartPage } from '../views/StartPage'
import { Welcome } from '../views/Welcome'

export const routes: RouteRecordRaw[]=[
    {path:'/', redirect:"/welcome"},
    {path:'/bar', component: Bar},
    {path:'/welcome', component: Welcome, 
    children:[
        {path:'', redirect:'/welcome/1'},
        {path:'1', component: First},
        {path:'2', component: Second},
        {path:'3', component: Third},
        {path:'4', component: Fourth},
    ]},
    {path:'/start', component: StartPage},
    {path:'/items', component: ItemPage,
    children:[
        {path: '', component: ItemList},
        {path: 'create', component: ItemCreate}
    ]    
},
]
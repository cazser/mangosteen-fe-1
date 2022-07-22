import { defineComponent, ref } from "vue";
import add from '../assets/icons/add.svg'
import { Icon } from "./Icon";
import s from './FloatButton.module.scss'
export const FloatButton = defineComponent(
    {
    setup(){
        
        return ()=>
        <button class={s.button}>
            <Icon src={add}/>
         </button>
        }
    }
)
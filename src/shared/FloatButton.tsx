import { defineComponent, ref } from "vue";
import add from '../assets/icons/add.svg'
import { Icon } from "./Icon";
export const FloatButton = defineComponent(
    {
    setup(){
        
        return ()=>
        <>
            <Icon src={add}/>
         </>
        }
    }
)
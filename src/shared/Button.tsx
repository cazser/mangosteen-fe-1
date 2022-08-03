import { defineComponent, PropType, ref } from "vue";
import s from './Button.module.scss';
interface Props{
    onClick?:(e:Event)=>void
}
export const Button = defineComponent(
    {
        props:{
            onClick:{
                type: Function
            },
            level:{
                type: String as PropType<'impportant' | 'normal' | 'danger' >,
                default: 'important'
            }
        },
    setup(props, context){
            return ()=>
            
                <button  class={[s.button, s[props.level]]}>
                    {context.slots.default?.()}
                </button>
            
        }
    }
)
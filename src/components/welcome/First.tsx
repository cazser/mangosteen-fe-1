import { defineComponent, ref } from "vue";
import s from './First.module.scss'
export const First = defineComponent(
    {
    setup(){
            return ()=>
                <div class={s.wrapper}>
                <div class={s.card}></div>
                <div class={s.actions}></div>
                </div>
        }
    }
)
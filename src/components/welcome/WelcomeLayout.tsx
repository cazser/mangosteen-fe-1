import { defineComponent, ref, useSlots } from "vue";
import s from './First.module.scss'

import { RouterLink } from "vue-router";
export const WelcomeLayout = defineComponent(
    {
    setup(props, context){
        const slots = context.slots;
            return ()=>
                <div class={s.wrapper}>
                <div class={s.card}>
                    {slots.icon?.()}
                    {slots.title?.()}
                </div>
                
                   {slots.buttons?.()}
                
                </div>
        }
    }
)
import { defineComponent, ref } from "vue";
import s from './Navbar.module.scss'
export const Navbar = defineComponent(
    {
    setup(props, context){
            const {slots} = context;
            return ()=>
                <div class={s.nav}>
                    <span class={s.icon_wrapper}>
                        {slots.icon?.()}
                    </span>
                    <span class={s.title}>
                        {slots.default?.()}
                    </span>
                </div>
        }
    }
)
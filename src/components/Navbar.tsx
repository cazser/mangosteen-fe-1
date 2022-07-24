import { defineComponent, ref } from "vue";
import s from './Navbar.module.scss'
interface Props{
    onClick? :(e:Event)=>void
}
export const Navbar = defineComponent<Props>(
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
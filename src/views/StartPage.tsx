import { defineComponent, ref } from "vue";
import { Button } from "../shared/Button";
import { FloatButton } from "../shared/FloatButton";
import s from './StartPage.module.scss';
export const StartPage = defineComponent(
    {
    setup(props, context){
        const onClick = (e: Event)=>{
            console.log("ho")
        }
            return ()=>
            <div class={s.buttonWrapper}>    
                <Button class={s.button} onClick={onClick}>测试</Button>
            <FloatButton/>
            </div>
        }
    }
)
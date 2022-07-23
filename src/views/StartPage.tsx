import { defineComponent, ref } from "vue";
import { Button } from "../shared/Button";
import { FloatButton } from "../shared/FloatButton";
import s from './StartPage.module.scss';
import pig from '../assets/icons/pig.svg'
import { Icon } from "../shared/Icon";
export const StartPage = defineComponent(

    {
    setup(props, context){
        const onClick = (e: Event)=>{
            console.log("ho")
        }
            return ()=>
            <>
            <nav>menu</nav>
            <div class={[s.center, s.pig_wrapper]}>
                <Icon src ={pig} class={s.pig}/>
            </div>
            <div class={s.buttonWrapper}>    
                <Button class={s.button} onClick={onClick}>测试</Button>
            <FloatButton/>
            </div>
            </>
        }
    }
)
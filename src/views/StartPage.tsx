import { defineComponent, ref } from "vue";
import { Button } from "../shared/Button";
import { FloatButton } from "../shared/FloatButton";
import s from './StartPage.module.scss';
import pig from '../assets/icons/pig.svg';
import menu from '../assets/icons/menu.svg'
import { Icon } from "../shared/Icon";
import { Navbar } from "../components/Navbar";
export const StartPage = defineComponent(

    {
    setup(props, context){
        const onClick = (e: Event)=>{
            console.log("ho")
        }
            return ()=>
            <>
            <nav>
                <Navbar>
                    {{default:'山竹记账', icon: <Icon src={menu}/>}}
                </Navbar>
            </nav>
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
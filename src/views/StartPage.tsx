import { defineComponent, ref } from "vue";
import { Button } from "../shared/Button";
import s from './StartPage.module.scss';
export const StartPage = defineComponent(
    {
    setup(){
            return ()=>
            <div class={[s.buttonWrapper,s.button]}>    
                <Button >测试</Button>
            
            </div>
        }
    }
)
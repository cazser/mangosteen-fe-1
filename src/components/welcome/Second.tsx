import { defineComponent, ref } from "vue";
import s from './First.module.scss'
import clock from '../../assets/icons/clock.svg'
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";
export const Second = defineComponent(
    {
    setup(){
            return ()=>
           <WelcomeLayout>
            {{
                icon: ()=> <img class={s.pig} src={clock} />,
                title: ()=> <h2>每日提醒<br/>不遗漏每一笔账</h2>,
                buttons:()=> 
                <div class={s.actions}>
                    <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                     <RouterLink to="/welcome/3">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                </div>
            }}
           </WelcomeLayout> 
               
        }
    }
)
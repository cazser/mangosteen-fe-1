import { defineComponent, ref } from "vue";
import s from './First.module.scss'
import cloud from '../../assets/icons/cloud.svg'
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";
export const Fourth = defineComponent(
    {
    setup(){
            return ()=>
            <WelcomeLayout>
            {{
                icon: ()=> <img class={s.pig} src={cloud} />,
                title: ()=> <h2>上传云端<br/>不会丢失</h2>,
                buttons:()=> 
                <div class={s.actions}>
                    <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                     <RouterLink to="/start">完成</RouterLink>
                    <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                </div>
            }}
           </WelcomeLayout>
        }
    }
)
import { defineComponent, ref } from "vue";
import s from './First.module.scss'
import pig from '../../assets/icons/pig.svg'
import {WelcomeLayout} from './WelcomeLayout'
import { RouterLink } from "vue-router";
export const First = defineComponent(
    {
    setup(){
        const slots={
            icon: ()=> <img class={s.pig} src={pig} />,
            title: ()=> <h2>会挣钱<br/>还得会省钱</h2>,
            buttons: ()=> 
                <div class={s.actions}>
                     <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                     <RouterLink to="/welcome/2">下一页</RouterLink>
                    <RouterLink to="/start">跳过</RouterLink>
                </div>
        }

            return ()=>
                <WelcomeLayout v-slots={slots}></WelcomeLayout>
        }
    }
)
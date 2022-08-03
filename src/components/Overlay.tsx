import { defineComponent, mergeProps, PropType, ref } from "vue";
import { Icon } from "../shared/Icon";
import chart from '../assets/icons/chart.svg'
import notice from '../assets/icons/notice.svg';
import exports from '../assets/icons/export.svg'
import s from './Overlay.module.scss'
import { RouterLink } from "vue-router";
export const Overlay = defineComponent(
    {
        props:{
            onClose:{
                type: Function as PropType<()=> void>
            }
        },
    setup(props, context){
        const onClickSignIn = () => { }
            const close=()=>{
                props.onClose?.();
            };
            return ()=>
                <>
                <div onClick={close} class={s.mask}>

                </div>
                <div class={s.overlay}>
                    <section class={s.currentUser} onClick={onClickSignIn}>
                        <h2>未登录用户</h2>
                        <RouterLink to="/sign_in">
                            <div>点击这里登录</div>
                        </RouterLink>
                    </section>
                    
                    <nav>
                        <ul class={s.action_list}>
                            <li>
                                <RouterLink to="/statisticsPage">
                                <Icon src={chart}/>
                                <span>统计图表</span>
                                </RouterLink>
                            </li>
                             <li>
                                <Icon src={notice}/>
                                <span>每日提醒</span>
                            </li>
                            <li>
                                <Icon src={exports} />
                                <span>导出数据</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        }
    }
)
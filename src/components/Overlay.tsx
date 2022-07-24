import { defineComponent, mergeProps, PropType, ref } from "vue";
import { Icon } from "../shared/Icon";
import chart from '../assets/icons/chart.svg'
import notice from '../assets/icons/notice.svg';
import exports from '../assets/icons/export.svg'
import s from './Overlay.module.scss'
export const Overlay = defineComponent(
    {
        props:{
            onClose:{
                type: Function as PropType<()=> void>
            }
        },
    setup(props, context){
            const close=()=>{
                props.onClose?.();
            };
            return ()=>
                <>
                <div onClick={close} class={s.mask}>

                </div>
                <div class={s.overlay}>
                    <section>
                        <h2>未登录用户</h2>
                        <div>点击这里登录</div>
                    </section>
                    <nav>
                        <ul>
                            <li>
                                <Icon src={chart}/>
                                <span>统计图表</span>
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
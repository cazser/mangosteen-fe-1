import { defineComponent, ref } from "vue";
import { MainLayout } from "../../layout/MainLayout";
import s from './ItemCreate.module.scss'
import left from '../../assets/icons/left.svg'
import { Icon } from "../../shared/Icon";
import { Tabs } from "../../shared/Tabs";
export const ItemCreate = defineComponent(
    {
    setup(){
            return ()=>
                <>
                <MainLayout>
                      {{title:()=>'记一笔',
                        icon: ()=><Icon src={left} class={s.navIcon} />,
                        default:()=>(
                            <>
                            <Tabs>
                            
                            </Tabs>
                            <div>
                                111
                            </div>
                            </>
                        )
                    }}
                    
                </MainLayout>
                </>
        }
    }
)
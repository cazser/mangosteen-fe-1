import { defineComponent, ref } from "vue";
import { MainLayout } from "../../layout/MainLayout";
import s from './ItemCreate.module.scss'
import left from '../../assets/icons/left.svg'
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { InputPad } from "./InputPad";
export const ItemCreate = defineComponent(
    {
    setup(){
        const refKind = ref("支出")
        const onUpdateSelected=(name: string)=>{
            refKind.value = name;
        }    
        return ()=>
                <>
                <MainLayout>
                      {{title:()=>'记一笔',
                        icon: ()=><Icon src={left} class={s.navIcon} />,
                        default:()=>(
                            <>
                            <Tabs selected={refKind.value}  onUpdateSelected={onUpdateSelected}>
                                <Tab name="支出">
                                    {"Icon列表"}
                                </Tab>
                                <Tab name="收入">
                                    {"Icon列表2"}

                                </Tab>
                            </Tabs>
                            <div class={s.inputPad_wrapper}>
                            <InputPad />
                            </div>
                            </>
                        )
                    }}
                    
                </MainLayout>
                </>
        }
    }
)
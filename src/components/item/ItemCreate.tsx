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
        const refExpenceTags = ref([
            {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
            
        ]);
        const refIncomeTags =ref([
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
            
        ]);    
        return ()=>
            <>
            <MainLayout>
            {{
                title:()=>'记一笔',
                icon: ()=><Icon src={left} class={s.navIcon} onClick={()=>{}} />,
                default:()=>(
                    <>
                        <Tabs selected={refKind.value}  onUpdateSelected={onUpdateSelected}>
                            <Tab name="支出">
                                <span>1</span>
                                {refExpenceTags.value.map((tag)=>{
                                    return (<span>
                                            {tag.name}
                                        </span>)})}
                            </Tab>
                            <Tab name="收入">
                                {refIncomeTags.value.map(
                                    (tag)=>{
                                     
                                     return(
                                        <span>{tag.name}</span>
                                     )
                                    }
                                )}
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
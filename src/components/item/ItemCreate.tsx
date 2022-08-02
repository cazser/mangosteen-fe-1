import { defineComponent, ref } from "vue";
import { MainLayout } from "../../layout/MainLayout";
import s from './ItemCreate.module.scss'
import left from '../../assets/icons/left.svg'
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { InputPad } from "./InputPad";
import add from '../../assets/icons/add.svg'
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
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
            {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
             {id:"1", name:"产出", sign:"￥", category:"expences"},
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
                                 <div class={s.tag}>
                                <div class={s.sign}>
                                  <Icon src={add} class={s.createTag} />
                                </div>
                            <div class={s.name}>
                              新增
                            </div>
                            </div>
                                {refExpenceTags.value.map((tag)=>{
                                    return (<div>
                                            {tag.name}
                                        </div>)})}
                            </Tab>
                            <Tab name="收入">
                                {refIncomeTags.value.map(
                                    (tag)=>{
                                     
                                     return(
                                        <div>{tag.name}</div>
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
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
        console.log(s.tags_wrapper)   
        return ()=>
            <MainLayout class={s.layout}>
            {{
                title:()=>'记一笔',
                icon: ()=><Icon src={left} class={s.navIcon} onClick={()=>{}} />,
                default:()=>(
                    <div class={s.wrapper}>
                        <Tabs selected={refKind.value}  onUpdateSelected={onUpdateSelected}
                             class={s.tabs}>
                            <Tab name="支出" >
                                <div class={s.tags_wrapper}>
                            <div class={s.tag}>
                                <div class={s.sign}>
                                  <Icon src={add} class={s.createTag} />
                                </div>
                            <div class={s.name}>
                              新增
                            </div>
                            </div>
                                {refExpenceTags.value.map((tag)=>{
                                    return (
                                        <div class={[s.tag, s.selected]}>
                                        <div class={s.sign}>
                                        {tag.sign}
                                        </div>
                                        <div class={s.name}>
                                            {tag.name}
                                        </div>
                                        </div>
                                    )})}
                                </div>
                            </Tab>
                            <Tab name="收入">
                                <div class={s.tags_wrapper}>
                                <div class={s.tag}>
                                <div class={s.sign}>
                                  <Icon src={add} class={s.createTag} />
                                </div>
                                <div class={s.name}>
                                    新增
                                </div>
                                </div>
                                {refIncomeTags.value.map(
                                    (tag)=>{
                                     
                                     return(
                                        <div class={[s.tag, s.selected]}>
                                        <div class={s.sign}>
                                        {tag.sign}
                                        </div>
                                        <div class={s.name}>
                                            {tag.name}
                                        </div>
                                        </div>
                                     )
                                    }
                                )}
                                </div>
                            </Tab>
                        </Tabs>
                        <div class={s.inputPad_wrapper}>
                        <InputPad />
                        </div>
                    </div>
                )  
            }}
            </MainLayout>
        }
    }
)
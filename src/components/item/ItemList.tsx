import { defineComponent, ref } from "vue";
import { MainLayout } from "../../layout/MainLayout";
import { Icon } from "../../shared/Icon";
import s from './ItemList.moudle.scss'
import menu from '../../assets/icons/menu.svg'
import { Tab, Tabs } from "../../shared/Tabs";
import { ItemSummary } from "./ItemSummary";

export const ItemList = defineComponent(
    {
    setup(){
      const refKind= ref("本月");
      const onUpdateSelected=(name: string)=>{
            refKind.value = name;
        }
            return ()=>
                <>
                <MainLayout>
                  {
                  { title:()=>'山竹记账',
                    icon: ()=><Icon src={menu}/>,
                    default: ()=>{
                        return (
                        
                            <Tabs v-model:selected={refKind.value}
                            onUpdateSelected={onUpdateSelected}>
                            <Tab name="本月" >
                              <ItemSummary/>
                            </Tab>
                            <Tab name="上月" >
                              <ItemSummary />
                            </Tab>
                             <Tab name="今年" >
                              <ItemSummary />
                            </Tab>
                            <Tab name="自定义" >
                              <ItemSummary />
                            </Tab>
                            
                            </Tabs>
                          
                        )
                    }
                  }
                }
                </MainLayout>
                </>
        }
    }
)
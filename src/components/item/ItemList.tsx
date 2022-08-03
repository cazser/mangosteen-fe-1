import { defineComponent, ref } from "vue";
import { MainLayout } from "../../layout/MainLayout";
import { Icon } from "../../shared/Icon";
import s from './ItemList.moudle.scss'
import menu from '../../assets/icons/menu.svg'
import { Tab, Tabs } from "../../shared/Tabs";

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
                              list1
                            </Tab>
                            <Tab name="上月" >
                              list2
                            </Tab>
                             <Tab name="今年" >
                              list3
                            </Tab>
                            <Tab name="自定义" >
                              list4
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
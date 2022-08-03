import { defineComponent, ref } from "vue";
import { MainLayout } from "../../layout/MainLayout";
import { Icon } from "../../shared/Icon";
import s from './ItemList.moudle.scss'
import menu from '../../assets/icons/menu.svg'
import { Tab, Tabs } from "../../shared/Tabs";

export const ItemList = defineComponent(
    {
    setup(){
      const refKind= ref(0);
            return ()=>
                <>
                <MainLayout>
                  {
                  { title:()=>'山竹记账',
                    icon: ()=><Icon src={menu}/>,
                    default: ()=>{
                        return (
                          <div class={s.bigfix}>
                            <Tabs v-model:selected={refKind.value}
                             >
                            <Tab name="本月" >
                              list1
                            </Tab>
                            <Tab name="上月" >
                              list1
                            </Tab>
                             <Tab name="今年" >
                              list1
                            </Tab>
                            <Tab name="自定义" >
                              list1
                            </Tab>
                            
                            </Tabs>
                          </div>
                        )
                    }
                  }
                }
                </MainLayout>
                </>
        }
    }
)
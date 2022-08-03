import { defineComponent, ref } from "vue";
import { MainLayout } from "../layout/MainLayout";
import { Icon } from "../shared/Icon";
import left from '../assets/icons/left.svg'
import { RouterLink } from "vue-router";
import { Tab, Tabs } from "../shared/Tabs";

export const StatisticsPage = defineComponent(
  {
  setup(){
      const refKind= ref("本月");
      const onUpdateSelected=(name: string)=>{
            refKind.value = name;
        }
      
      return ()=>
        <MainLayout>
          {
            {
              title:()=>"统计图表",
              icon: ()=>(
              <RouterLink to="/start">
              <Icon src={left}/>
              </RouterLink>),
              default:
                ()=>
                {
                  return (
                 
                            <Tabs v-model:selected={refKind.value}
                            onUpdateSelected={onUpdateSelected}
                            >
                            <Tab name="本月" >
                            </Tab>
                            <Tab name="上月" >
                            </Tab>
                             <Tab name="今年" >
                            </Tab>
                            <Tab name="自定义时间" >
                            </Tab>
                            </Tabs>
                  )
                }
            }
          }
        </MainLayout>
    }
  }
)
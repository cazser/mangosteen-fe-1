import { defineComponent, reactive, ref } from "vue";
import { MainLayout } from "../layout/MainLayout";
import { Icon } from "../shared/Icon";
import left from '../assets/icons/left.svg'
import { RouterLink } from "vue-router";
import { Tab, Tabs } from "../shared/Tabs";
import { Charts } from "../components/statistics/Charts";
import { Time } from "../shared/time";

export const StatisticsPage = defineComponent(
  {
  setup(){
      const refKind= ref("本月");
      const onUpdateSelected=(name: string)=>{
            refKind.value = name;
        }
      const time = new Time();
      const customTime= reactive({ 
        start: new Time().format(),
      end: new Time().format()});
      const timeList =[
        {start: time.firstDayOfMonth(), end: time.lastDayOfMonth()},
        {start: time.add(-1, 'month').firstDayOfMonth(), end: time.add(-1, 'month').lastDayOfMonth()},
        {start: time.firstDayOfYear(), end:time.lastDayOfYear()}
      ]
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
                              <Charts startDate={timeList[0].start.format()} endDate={timeList[0].end.format()}/>
                            </Tab>
                            <Tab name="上月" >
                              <Charts  startDate={timeList[1].start.format()} endDate={timeList[1].end.format()}/>
                            </Tab>
                             <Tab name="今年" >
                              <Charts startDate={timeList[2].start.format()} endDate={timeList[2].end.format()}/>
                            </Tab>
                            <Tab name="自定义时间" >
                              <Charts  startDate={customTime.start}  endDate={customTime.end}/>
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
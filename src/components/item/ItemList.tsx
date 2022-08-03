import { defineComponent, PropType, reactive, ref, watchEffect } from 'vue';
import { MainLayout } from "../../layout/MainLayout";
import { Icon } from "../../shared/Icon";
import s from './ItemCreate.module.scss'
import menu from '../../assets/icons/menu.svg'
import { Tab, Tabs } from "../../shared/Tabs";
import { ItemSummary } from "./ItemSummary";
import { Overlay } from 'vant';
import { Time } from "../../shared/time";
import {Form, FormItem} from '../../shared/Form';
export const ItemList = defineComponent(
    {
    setup(){
      const refKind= ref("本月");
      const onUpdateSelected=(name: string)=>{
            refKind.value = name;
        }
      const refOverlayVisible = ref(false)
      watchEffect(() => {

      if (refKind.value === '自定义时间') {
        refOverlayVisible.value = true
      }
    })
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
                <>
                <MainLayout>
                  {
                  { title:()=>'山竹记账',
                    icon: ()=><Icon src={menu}/>,
                    default: ()=>{
                        return (
                          <>
                            <Tabs v-model:selected={refKind.value}
                            onUpdateSelected={onUpdateSelected}>
                            <Tab name="本月" >
                              <ItemSummary startDate={timeList[0].start.format()} endDate={timeList[0].end.format()} />
                            </Tab>
                            <Tab name="上月" >
                              <ItemSummary startDate={timeList[1].start.format()} endDate={timeList[1].end.format()}/>
                            </Tab>
                             <Tab name="今年" >
                              <ItemSummary startDate={timeList[2].start.format()} endDate={timeList[2].end.format()}/>
                            </Tab>
                            <Tab name="自定义时间" >
                              <ItemSummary  startDate={customTime.start}  endDate={customTime.end}/>
                            </Tab>
                            
                            </Tabs>
                             <Overlay show={refOverlayVisible.value} class={s.overlay} >
                      <div class={s.overlay_inner}>
                <header>
                  请选择时间
                </header>
                <main>
                  <Form>
                    <FormItem label='开始时间' v-model={customTime.start} type='date' />
                  </Form>
                </main>
              </div>
            </Overlay>
                          </>
                          )
                    }
                  }
                }
                </MainLayout>
                </>
        }
    }
)
import { Component, DefineComponent, defineComponent, PropType, reactive, ref, watchEffect } from "vue";
import { Icon } from "../shared/Icon";
import { Time } from "../shared/time";
import { MainLayout } from "./MainLayout";
import left from '../assets/icons/left.svg';
import { Tab, Tabs } from "../shared/Tabs";
import { ItemSummary } from "../components/item/ItemSummary";
import { Overlay } from "vant";
import { Form, FormItem } from "../shared/Form";
import s from './TimeTabsLayout.module.scss'
import { RouterLink } from "vue-router";
export const TimeTabsLayout = defineComponent(
  {
    props:{
      component:{
        type: Object as PropType<DefineComponent<typeof ItemSummary>>,
        required: true
        
    }
  },
  setup(
    props:any, _context:any
  ){
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

                    icon: ()=>
                    (<RouterLink to='/start'>
                      <Icon src={left}/>
                    </RouterLink>) ,
                    default: ()=>{
                        return (
                          <>
                            <Tabs v-model:selected={refKind.value}
                            onUpdateSelected={onUpdateSelected}
                            >
                            <Tab name="本月" >
                              <props.component startDate={timeList[0].start.format()} endDate={timeList[0].end.format()} />
                            </Tab>
                            <Tab name="上月" >
                              <props.component startDate={timeList[1].start.format()} endDate={timeList[1].end.format()}/>
                            </Tab>
                             <Tab name="今年" >
                              <props.component startDate={timeList[2].start.format()} endDate={timeList[2].end.format()}/>
                            </Tab>
                            <Tab name="自定义时间" >
                              <props.component  startDate={customTime.start}  endDate={customTime.end}/>
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
                     <FormItem label='结束时间' v-model={customTime.end} type='date' />
                    <FormItem>
                      <div class={s.actions}>
                        <button type="button" onClick={()=>{refOverlayVisible.value = false;}}>取消</button>
                        <button type="submit" onClick={()=>{refOverlayVisible.value = false;}}>确认</button>
                      </div>
                    </FormItem>
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
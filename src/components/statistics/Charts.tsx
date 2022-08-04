

import { defineComponent, onMounted, PropType, ref } from "vue";
import { FormItem } from "../../shared/Form";
import s from './Charts.module.scss'

export const Charts = defineComponent(
  {
 props: {
    startDate: {
      type: String as PropType<string>,
      required: true
    },
    endDate: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(){
    const category = ref('expences')
    const refDiv = ref<HTMLElement>();
    onMounted(()=>{
      if(refDiv.value === undefined) return;
       var myChart = echarts.init(refDiv.value);

      // 指定图表的配置项和数据
      var option = {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          grid:{
            right: 0, left:0, top:0
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line'
            }
          ]
        };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    })
    return ()=>
        <>
        <div class={s.wrapper}>
          <FormItem label="类型" type="select"
          options={[
            {value: 'expences', text:'支出'},
            {value: 'income', text:'收入'}
          ]}
          v-model={category.value}
          />
        </div>
        <div ref={refDiv} class={s.demo}>

        </div>
      </>
    }
  }
)
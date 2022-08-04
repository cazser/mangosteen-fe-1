import { defineComponent, onMounted, ref } from "vue";
import s from './LineChart.module.scss'
import * as echarts from 'echarts'
export const LineChart = defineComponent(
  {
  setup(){
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
       <div ref={refDiv} class={s.wrapper}>
        </div>
      </>
    }
  }
)
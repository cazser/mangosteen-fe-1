import { defineComponent, onMounted, ref } from "vue";
import s from './PieChart.module.scss'
import * as echarts from 'echarts'
export const PieChart = defineComponent(
  {
  setup(){
 const refDiv = ref<HTMLElement>();
onMounted(()=>{
      if(refDiv.value === undefined) return;
       var myChart = echarts.init(refDiv.value);

      // 指定图表的配置项和数据
      var option = {
  
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
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
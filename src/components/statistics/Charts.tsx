import { defineComponent, PropType, ref } from "vue";
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
      return ()=>
        <>
        <div class={s.wrapper}>图表</div>
      </>
    }
  }
)
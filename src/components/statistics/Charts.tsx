import { defineComponent, ref } from "vue";
import s from './Charts.module.scss'
export const Charts = defineComponent(
  {
  setup(){
      return ()=>
        <>
        <div class={s.wrapper}>图表</div>
      </>
    }
  }
)
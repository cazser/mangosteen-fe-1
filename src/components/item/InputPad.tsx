import { defineComponent, ref } from "vue";
import s from './InputPad.module.scss'
export const InputPad = defineComponent(
  {
  setup(props, context){
      return ()=>
        <>
        <div>+1</div>
      </>
    }
  }
)
import { defineComponent, ref } from "vue";
import s from './Form.module.scss';
export const Form = defineComponent(
  {
  setup(){
      return ()=>
        <>
        <div>form</div>
      </>
    }
  }
)


export const FormItem = defineComponent(
  {
  setup(){
      return ()=>
        <>
        <div>formItem</div>
      </>
    }
  }
)
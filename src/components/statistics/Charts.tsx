import { defineComponent, PropType, ref } from "vue";
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
      return ()=>
        <>
        <div class={s.wrapper}>
          |{category.value}|
          <FormItem label="类型" type="select"
          options={[
            {value: 'expences', text:'支出'},
            {value: 'income', text:'收入'}
          ]}
          v-model={category.value}
          />
        </div>
      </>
    }
  }
)
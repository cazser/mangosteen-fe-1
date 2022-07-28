import { defineComponent, ref } from "vue";
import s from './InputPad.module.scss'
import { Icon } from "../../shared/Icon";
import { time } from "../../shared/time";
import { Button } from 'vant';
import { DatetimePicker, Popup } from 'vant';
import 'vant/lib/index.css';
export const InputPad = defineComponent(
  {
  setup(props, context){
    const buttons=[
      {text:'1', onclick:()=>{}},
      {text:'2', onclick:()=>{}},
      {text:'3', onclick:()=>{}},
      {text:"清空", onclick:()=>{}},
      {text:'4', onclick:()=>{}},
      {text:'5', onclick:()=>{}},
      {text:'6', onclick:()=>{}},
      {text:"+", onclick:()=>{}},
      {text:'7', onclick:()=>{}},
      {text:'8', onclick:()=>{}},
      {text:'9', onclick:()=>{}},
      {text:"-", onclick:()=>{}},
      {text:'.', onclick:()=>{}},
      {text:'0', onclick:()=>{}},
      {text:'删', onclick:()=>{}},
      {text:'提交', onclick:()=>{}},
    ];
    const now = new Date()
    const refDate = ref<Date>(now);
      const refShowPop = ref(false);
      return ()=>
        <>
        <div class={[s.wrapper, s.dateAndAmount] }>
          <span class={s.date}>
             <span>
             <span onClick={() => refShowPop.value = true}>{time(refDate.value).format()}</span>
            <Popup position='bottom' v-model:show={refShowPop.value}>
              <DatetimePicker v-model={refDate.value} type="date" title="选择年月日"
                onConfirm={() => refShowPop.value = false} 
                 onCancel={() => refShowPop.value = false} />
                
            </Popup>
          </span>
          </span>
          <span class={s.amount}>199</span>
        </div>
        <div class={s.buttons}>
          {buttons.map((button)=><button onClick={button.onclick}>{button.text}</button>)}
        </div>
      </>
    }
  }
)
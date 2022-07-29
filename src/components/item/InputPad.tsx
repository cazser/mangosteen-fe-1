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
   const now = new Date()
    const refDate = ref<Date>(now);
      const refShowPop = ref(false);
      const hiddPopUp=()=>{refShowPop.value = false};
      const setDate =(date:Date)=>{refDate.value = date; hiddPopUp();}
      const refAmount = ref("");
      const appendText =(n: number | string)=>{refAmount.value += n.toString()}
    
  const buttons=[
      {text:'1', onclick:()=>{appendText(1)}},
      {text:'2', onclick:()=>{appendText(2)}},
      {text:'3', onclick:()=>{appendText(3)}},
      {text:"清空", onclick:()=>{refAmount.value=""}},
      {text:'4', onclick:()=>{appendText(4)}},
      {text:'5', onclick:()=>{appendText(5)}},
      {text:'6', onclick:()=>{appendText(6)}},
      {text:"+", onclick:()=>{}},
      {text:'7', onclick:()=>{appendText(7)}},
      {text:'8', onclick:()=>{appendText(8)}},
      {text:'9', onclick:()=>{appendText(9)}},
      {text:"-", onclick:()=>{}},
      {text:'.', onclick:()=>{}},
      {text:'0', onclick:()=>{appendText(0)}},
      {text:'删', onclick:()=>{}},
      {text:'提交', onclick:()=>{}},
    ];
   
      return ()=>
        <>
        <div class={[s.wrapper, s.dateAndAmount] }>
          <span class={s.date}>
             <span>
             <span onClick={() => refShowPop.value = true}>{time(refDate.value).format()}</span>
            <Popup position='bottom' v-model:show={refShowPop.value}>
              <DatetimePicker value={refDate.value} type="date" title="选择年月日"
                onConfirm={setDate} 
                 onCancel={hiddPopUp} />
                
            </Popup>
          </span>
          </span>
          <span class={s.amount}>{refAmount.value}</span>
        </div>
        <div class={s.buttons}>
          {buttons.map((button)=><button onClick={button.onclick}>{button.text}</button>)}
        </div>
      </>
    }
  }
)
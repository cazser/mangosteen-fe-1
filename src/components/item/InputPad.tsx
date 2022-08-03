import { defineComponent, ref } from "vue";
import s from './InputPad.module.scss'
import { Icon } from "../../shared/Icon";
import { Time } from "../../shared/time";
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
      const appendText =(n: number | string)=>{
        const nString = n.toString();
        const dotIndex = refAmount.value.indexOf('.');
        if(nString ==='.'){
          if(dotIndex >=0){
            return;
          }
        }else if(nString==='0'){
          if(refAmount.value.indexOf(".")>=0){

          }else{
            if(refAmount.value.indexOf("0")>=0){
              return;
            }
          }
        }else{
          if(refAmount.value==='0'){
            refAmount.value ='';
          }
        }
        refAmount.value += n.toString()}
    
      const buttons=[
      {text:'1', onclick:()=>{appendText(1)}},
      {text:'2', onclick:()=>{appendText(2)}},
      {text:'3', onclick:()=>{appendText(3)}},
      {text:'4', onclick:()=>{appendText(4)}},
      {text:'5', onclick:()=>{appendText(5)}},
      {text:'6', onclick:()=>{appendText(6)}},
      {text:'7', onclick:()=>{appendText(7)}},
      {text:'8', onclick:()=>{appendText(8)}},
      {text:'9', onclick:()=>{appendText(9)}},
      {text:'.', onclick:()=>{appendText('.')}},
      {text:'0', onclick:()=>{appendText(0)}},
      {text:'清空', onclick:()=>{refAmount.value='0'}},
      {text:'提交', onclick:()=>{}},
    ];
   
      return ()=>
        <>
        <div class={[s.wrapper, s.dateAndAmount] }>
          <span class={s.date}>
             <span>
             <span onClick={() => refShowPop.value = true}>{new Time(refDate.value).format()}</span>
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
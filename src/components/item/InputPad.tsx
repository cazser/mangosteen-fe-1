import { defineComponent, ref } from "vue";
import s from './InputPad.module.scss'
import notes from '../../assets/icons/comment.svg';
import { Icon } from "../../shared/Icon";
import { time } from "../../shared/time";
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
      return ()=>
        <>
        <div class={[s.wrapper, s.dateAndAmount] }>
          <span class={s.date}>
             <span>
            <input type="date" value={time(now).format()} />
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
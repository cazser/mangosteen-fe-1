import { Icon } from "../shared/Icon";
import { defineComponent, reactive, ref, toRaw } from "vue";
import { MainLayout } from "../layout/MainLayout";
import left from '../assets/icons/left.svg';
import s from './TagCreate.module.scss';
import { Button } from "../shared/Button";
import { EmojiSelect } from "../shared/EmojiSelect";

export const TagCreate = defineComponent(
  {
  setup(){
    const formData = reactive({
      name:'',
      sign:'x'
    })  
    const onSubmit= (e: SubmitEvent)=>{
      console.log(toRaw(formData))
      const rules =[
        {key:'name', required: true, message: "必填"},
        {key:'name', pattern: /^.{1,4}$/, message:"1到4个字"},
        {key: 'sign', required: true}
      ]
      const errors = validate(toRaw(formData), rules);
      e.preventDefault();
    }
    return ()=>
        <>
        <MainLayout>
          {{
            title: '创建标签',
            icon: ()=><Icon src={left} onClick={()=>{}}/>,
            default:
              ()=>{
               return(
                
                   <form class={s.form} onSubmit={onSubmit}>
                
            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>标签名</span>
                <div class={s.formItem_value}>
                  <input v-model ={formData.name} class={[s.formItem, s.input, s.error]}></input>
                </div>
                <div class={s.formItem_errorHint}>
                  <span>必填</span>
                </div>
              </label>
            </div>
            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>符号</span>
                <div class={s.formItem_value}>
                  <EmojiSelect v-model={formData.sign} class={[s.formItem, s.emojiList, s.error]}>
                   
                  </EmojiSelect>
                </div>
                <div class={s.formItem_errorHint}>
                  <span>必填</span>
                </div>
              </label>
            </div>
             <p class={s.tips}>记账时长按标签即可进行编辑</p>
            <div class={s.formRow}>
              <div class={s.formItem_value}>
                <Button class={[s.formItem, s.button]}>确定</Button>
              </div>
            </div>
          </form>

                
               ) 
              }
          }}
        </MainLayout>
      </>
    }
  }
)
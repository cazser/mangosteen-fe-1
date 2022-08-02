import { Icon } from "../shared/Icon";
import { defineComponent, reactive, ref, toRaw } from "vue";
import { MainLayout } from "../layout/MainLayout";
import left from '../assets/icons/left.svg';
import s from './TagCreate.module.scss';
import { Button } from "../shared/Button";
import { EmojiSelect } from "../shared/EmojiSelect";
import { Rules, validate } from "../shared/validate";

export const TagCreate = defineComponent(
  {
  setup(){
    const formData = reactive({
      name:'',
      sign:''
    })  
    type XData={
      name: string,
      sign: string
    }
    const errors = reactive<{[k in keyof typeof formData]?: string[]}>({});
    const onSubmit= (e: Event)=>{
      console.log(toRaw(formData))
      const rules: Rules<typeof formData>=[
        {key:'name', type:'required' , message: "必填"},
        {key:'name', type:'pattern', regex: /^.{1,4}$/, message:"1到4个字"},
        {key: 'sign', type:"required", message:"" }
      ]
      Object.assign(errors, {name: undefined, sign: undefined})
      Object.assign(errors, validate(toRaw(formData),rules) );
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
                  <span>{errors['name']?.[0]}</span>
                </div>
              </label>
            </div>
            <div class={s.formRow}>
              <label class={s.formLabel}>
                <span class={s.formItem_name}>符号{formData.sign}</span>
                <div class={s.formItem_value}>
                  <EmojiSelect v-model={formData.sign} class={[s.formItem, s.emojiList, s.error]}>
                   
                  </EmojiSelect>
                </div>
                <div class={s.formItem_errorHint}>
                  <span>{errors['sign']?.[0]}</span>
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
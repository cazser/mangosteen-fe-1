import { Icon } from "../shared/Icon";
import { defineComponent, reactive, ref } from "vue";
import { MainLayout } from "../layout/MainLayout";
import left from '../assets/icons/left.svg';
import s from './TagCreate.module.scss';
import { Button } from "../shared/Button";
export const TagCreate = defineComponent(
  {
  setup(){
    const formData = reactive({
      name:'',
      sign:''
    })  
    return ()=>
        <>
        <MainLayout>
          {{
            title: '创建标签',
            icon: ()=><Icon src={left} onClick={()=>{}}/>,
            default:
              ()=>{
               return(
                
                   <form class={s.form}>
                    |{formData.name}|
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
                  <div class={[s.formItem, s.emojiList, s.error]}>
                    <nav>
                      <span class={s.selected}>表情</span>
                      <span>手势</span>
                      <span>职业</span>
                      <span>衣服</span>
                      <span>动物</span>
                      <span>自然</span>
                      <span>食物</span>
                      <span>运动</span>
                      <span>表情</span>
                      <span>手势</span>
                      <span>职业</span>
                      <span>衣服</span>
                      <span>动物</span>
                      <span>自然</span>
                      <span>食物</span>
                      <span>运动</span>
                    </nav>
                    <ol>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                      <li>😀</li>
                    </ol>
                  </div>
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
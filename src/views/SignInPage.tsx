import { defineComponent, reactive, ref, resolveComponent } from "vue";
import { MainLayout } from "../layout/MainLayout";
import { Icon } from "../shared/Icon";
import left from '../assets/icons/left.svg'
import s from './SignInPage.module.scss'
import { Form, FormItem } from "../shared/Form";
import { Button } from "../shared/Button";
import { validate } from "../shared/validate";
import mangosteen from '../assets/icons/mangosteen.svg'
export const SignInPage = defineComponent(
  {
  setup(){
    const formData = reactive({email:'', code:''});
    const errors = reactive({email:[], code:[]})
    const onSubmit=(e: Event)=>{
      e.preventDefault();
      Object.assign(errors, {email:[], code:[]})
     Object.assign(errors, validate(formData, 
        [
        {key:"email", type:'required', message:"必填"},
        {key:"code", type:'required', message:"必填"},
        {key:"email", type:'pattern', regex:/.*@.*/, message:"必须是邮箱"}
        ]));
    }
    return ()=>
        <>
        <MainLayout>
          {{
            title: ()=>"登录",
            icon: ()=><Icon src={left}/>,
            default:
              ()=><>
              <div class={s.wrapper}>
                <div class={s.title}>
                <img src={mangosteen}/>
                <p>山竹记账</p>
                </div>
                <Form onSubmit={onSubmit}>
                  <FormItem label="邮箱地址" type="text" 
                  v-model={formData.email} error={errors.email?.[0] ?? ' '}
                  placeholder="请输入邮箱，然后点击发送验证码"/>
                  <FormItem label="验证码" type='validationCode' placeholder="6位数字"
                  v-model={formData.code} error={errors.code?.[0] ?? ' '}/>
                  <FormItem>
                    <div class={s.footer}>
                    <Button>登录</Button>
                    </div>
                  </FormItem>
                </Form>
              </div>
              </>
          }}
        </MainLayout>
      </>
    }
  }
)
import { defineComponent, ref } from "vue";
import { MainLayout } from "../layout/MainLayout";
import { Icon } from "../shared/Icon";
import left from '../assets/icons/left.svg'
import s from './SignInPage.module.scss'
import { Form, FormItem } from "../shared/Form";
import { Button } from "../shared/Button";
export const SignInPage = defineComponent(
  {
  setup(){
      return ()=>
        <>
        <MainLayout>
          {{
            title: ()=>"登录",
            icon: ()=><Icon src={left}/>,
            default:
              ()=><>
              <div class={s.wrapper}>
                <Form>
                  <FormItem label="邮箱地址" type="text"/>
                  <FormItem label="验证码" type="text"/>
                  <FormItem>
                    <Button>登录</Button>
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
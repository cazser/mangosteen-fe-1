import { Icon } from "../shared/Icon";
import { defineComponent, reactive, ref, toRaw } from "vue";
import { MainLayout } from "../layout/MainLayout";
import left from '../assets/icons/left.svg';
import s from './Tag.module.scss';
import { Button } from "../shared/Button";
import { Rules, validate } from "../shared/validate";
import { TagForm } from "./TagForm";

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
                <TagForm/>                
               ) 
              }
          }}
        </MainLayout>
      </>
    }
  }
)
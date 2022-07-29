import { Icon } from "../shared/Icon";
import { defineComponent, ref } from "vue";
import { MainLayout } from "../layout/MainLayout";
import left from '../assets/icons/left.svg';
export const TagCreate = defineComponent(
  {
  setup(){
      return ()=>
        <>
        <MainLayout>
          {{
            title: '创建标签',
            icon: ()=><Icon src={left} onClick={()=>{}}/>,
            default:
              ()=>{
               return(
                <div>
                  <form>
                    <label>
                      <input></input>
                    </label>
                  </form>
                </div>
               ) 
              }
          }}
        </MainLayout>
      </>
    }
  }
)
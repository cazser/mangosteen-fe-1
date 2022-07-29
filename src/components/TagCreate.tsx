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
                    <div>
                    <label>
                      <span>标签名</span>
                      <input></input>
                    </label>
                    </div>
                    <div>
                    <label>
                      <span>符号</span>
                      <div>
                      
                        <nav>
                          <span>表情</span>
                          <span>职业</span>
                        </nav>
                        <ol>
                          <li >1</li >
                          <li >2</li >
                        </ol>
                      </div>
                    </label>
                    </div>
                    <div>
                    <p>记账时长按标签即可进行编辑</p>
                    </div>
                    <div>
                    <button>确定</button>
                    </div>
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
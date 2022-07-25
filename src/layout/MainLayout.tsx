import { defineComponent, PropType, ref } from "vue";
import { Navbar } from "../components/Navbar";
export const MainLayout = defineComponent(
    {
        props:{
             onNavBarClick:{
                type: Function as PropType<(argu0: Event)=> void>
            }
        }, 
    setup(props, context){
            return ()=>
                <>
                <div>
                <nav>
                <Navbar onClick={props.onNavBarClick}>
                    {{default: context.slots.title?.(), icon: context.slots.icon?.()}}
                </Navbar>
                </nav>
                {context.slots.default?.()}
                
                </div>
            </>
        }
    }
)
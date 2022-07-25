import { defineComponent, ref } from "vue";
import { Navbar } from "../components/Navbar";
export const MainLayout = defineComponent(
    {
    setup(props, context){
            return ()=>
                <>
                <div>
                <nav>
                <Navbar>
                    {{default: context.slots.title?.(), icon: context.slots.icon?.()}}
                </Navbar>
            </nav>
                {context.slots.default?.()}
            
                </div>
            </>
        }
    }
)
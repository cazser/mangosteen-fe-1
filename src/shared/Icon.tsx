import { defineComponent, ref } from "vue";
interface Props{
    src: string,
    onClick?: Function
}
export const Icon = defineComponent<Props>(
    {
    setup(){
            return ()=>
                <img/>
        }
    }
)
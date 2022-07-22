import { defineComponent, ref } from "vue";
interface Props{
    src: string
}
export const Icon = defineComponent<Props>(
    {
    setup(){
            return ()=>
                <img/>
        }
    }
)
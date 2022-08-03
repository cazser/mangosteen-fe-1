import { defineComponent, ref } from "vue";
import { Time } from "../../shared/time";
export const ItemSummary = defineComponent(
  {
    props:{
      startDate:{
        type: String,
        required: true
      },
      endDate:{
      type: String,
        required: true
      }
    },
  setup(){
      return ()=>
        <>
        <div>summary</div>
      </>
    }
  }
)
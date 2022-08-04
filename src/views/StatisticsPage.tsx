import { defineComponent, PropType, reactive, ref, watchEffect } from 'vue';
import { ItemSummary } from '../components/item/ItemSummary';
import { Charts } from '../components/statistics/Charts';
import { TimeTabsLayout } from '../layout/TimeTabsLayout';

export const StatisticsPage = defineComponent(
    {
    setup(){
     
            return ()=>
                <>
                <TimeTabsLayout component={Charts}/> 
                </>
        }
    }
)
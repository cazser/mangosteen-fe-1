import { defineComponent, reactive, ref } from "vue";
import { MainLayout } from "../layout/MainLayout";
import { Icon } from "../shared/Icon";
import left from '../assets/icons/left.svg'
import { RouterLink } from "vue-router";
import { Tab, Tabs } from "../shared/Tabs";
import { Charts } from "../components/statistics/Charts";
import { Time } from "../shared/time";
import { TimeTabsLayout } from "../layout/TimeTabsLayout";

export const StatisticsPage = defineComponent(
  {
  setup(){
   return (
    <TimeTabsLayout component={Charts} />
   ) 
  }
}
)
import { defineComponent, PropType, reactive, ref, watchEffect } from 'vue';
import { MainLayout } from "../../layout/MainLayout";
import { Icon } from "../../shared/Icon";
import s from './ItemCreate.module.scss'
import menu from '../../assets/icons/menu.svg'
import { Tab, Tabs } from "../../shared/Tabs";
import { ItemSummary } from "./ItemSummary";
import { Overlay } from 'vant';
import { Time } from "../../shared/time";
import {Form, FormItem} from '../../shared/Form';
import { TimeTabsLayout } from '../../layout/TimeTabsLayout';
export const ItemList = defineComponent(
    {
    setup(){
      
            return ()=>
                <>
                <TimeTabsLayout component={ItemSummary}/> 
                </>
        }
    }
)
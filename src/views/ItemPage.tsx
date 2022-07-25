import { defineComponent, ref } from "vue";
import { MainLayout } from "../layout/MainLayout";
import { Icon } from "../shared/Icon";
import s from './ItemPage.module.scss'
import { RouterView } from "vue-router";
export const ItemPage = defineComponent(
    {
    setup(){
            return ()=>
                <>
                <RouterView/>
                 <MainLayout>
                   
                </MainLayout>
            </>
        }
    }
)
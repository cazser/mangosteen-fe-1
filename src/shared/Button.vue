


<template>
    <button class={s.button}>{context.slots.default?.()}</button>
    </template>
<script>
import { defineComponent, ref } from "vue";

import s from './Button.module.scss';
</script>
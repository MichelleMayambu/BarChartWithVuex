<template>
    <div>
        <h1>DashBoard</h1>
        <component :is="barchart" />
    </div>
</template>
<script>
import barchart from "~/components/barChart/barchart.vue"
export default {
    data() {
        return{
            barchart
        }
    }
}
</script>
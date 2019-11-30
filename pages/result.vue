<template>
  <b-container class="bv-example-row mt-5">
    <h2 class="mb-5">あなたの価値観は・・・</h2>
    <b-row class="justify-content-md-center">
      <b-col cols="8">
        <!-- <chart :param="param"></chart> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import draggable from 'vuedraggable'
// import Chart from '@/Components/Chart';

export default {
  components: {
    draggable,
    Chart
  },
  data () {
    return {
      selectedIndex: 0,
      param: [100, 70, 75, 90, 95]
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>


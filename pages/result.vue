<template>
  <b-container class="bv-example-row mt-5">
    <h2 class="mb-5">あなたの価値観は・・・</h2>
    <b-row class="justify-content-md-center">
      <b-col xs="12" md="6">
        <chart :param="param"></chart>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import draggable from 'vuedraggable'
import Chart from '../components/Chart';

export default {
  components: {
    draggable,
    Chart
  },
  data () {
    return {
      param: this.$store.state.score
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


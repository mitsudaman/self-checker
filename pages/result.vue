<template>
  <b-container class="bv-example-row mt-5">
    <h2 class="mb-5">あなたの価値観は・・・</h2>
    <b-row class="justify-content-md-center">
      <b-col xs="12" md="7">
        <chart :param="param"></chart>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col xs="12" md="7">
        <b-row class="justify-content-md-center">
          <b-col xs="5" md="9"></b-col>
          <b-col xs="7" md="3">
            <b-button 
              id="download" 
              class="btn-block" 
              @click="onDownload()">
              <i class="fas fa-download"/>
              <span class="pl-2">Download</span>
            </b-button>
          </b-col>
        </b-row>
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
  },
  methods: {
    onDownload() {
      let canvas = document.getElementById("radar-chart");
      let link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "self_checker.png";
      link.click();
    },
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


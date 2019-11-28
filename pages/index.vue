<template>
  <b-container class="bv-example-row mt-5">
    <b-row class="justify-content-md-center">
      <b-col cols="5">
        <draggable v-model="List" group="people" @start="drag=true" @end="drag=false">
        <b-card v-for="element in List" :key="element.id" class="mb-2">
          <b-card-text>{{element.text}}
          </b-card-text>
        </b-card> 
      </draggable>
      </b-col>
    </b-row>
    {{List}}
    <b-row class="justify-content-md-center">
      <b-col cols="8">
        <chart :param="param"></chart>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import draggable from 'vuedraggable'
import Chart from './Chart';

export default {
  components: {
    draggable,
    Chart
  },
  data () {
    return {
      List: [
        {
          text: '休み',
          id: 1
        },
        {
          text: '報酬',
          id: 2
        },
        {
          text: '健康',
          id: 3
        }
      ],
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


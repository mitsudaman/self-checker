<template>
  <b-container class="mt-5">
    <h2 class="mb-5">Q.あなたにとって優先度の高い順番で並び替えてください。({{pageIndex}}/4)</h2>
    <template v-if="pageIndex==1">
      <b-row class="justify-content-md-center">
        <b-col xs="12" md="5">
          <draggable v-model="List1" group="people" @start="drag=true" @end="drag=false">
          <b-card v-for="(element,index) in List1" :key="element.id" class="mb-4">
            <b-card-text>{{index + 1}}位 {{element.text}}
            </b-card-text>
          </b-card> 
        </draggable>
        </b-col>
      </b-row>
      {{List1}}
    </template>
    <template v-if="pageIndex==2">
      <b-row class="justify-content-md-center">
        <b-col xs="12" md="5">
          <draggable v-model="List2" group="people" @start="drag=true" @end="drag=false">
          <b-card v-for="(element,index) in List2" :key="element.id" class="mb-4">
            <b-card-text>{{index + 1}}位 {{element.text}}
            </b-card-text>
          </b-card> 
        </draggable>
        </b-col>
      </b-row>
      {{List2}}
    </template>
   <div>
      <b-row class="justify-content-md-center mt-5">
        <b-col xs="12" md="5">
          <b-row class="justify-content-md-center">
            <b-col cols="5">
              <b-button 
              v-if="pageIndex>1"
              block variant="outline-primary" @click="back()">前へ</b-button>
            </b-col>
            <b-col cols="2">
            </b-col>
            <b-col cols="5">
              <b-button v-if="pageIndex<4" block variant="outline-primary" @click="next()">次へ</b-button>
              <b-button v-if="pageIndex==4" block variant="outline-primary" @click="result()">結果を見る</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable,
  },
  data () {
    return {
      List1: [
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
      List2: [
        {
          text: '休み2',
          id: 1
        },
        {
          text: '報酬2',
          id: 2
        },
        {
          text: '健康2',
          id: 3
        }
      ],
      selectedIndex: 0,
      pageIndex:1
    }
  },
  methods: {
    back(){
      this.pageIndex -- 
    },
    next(){
      this.pageIndex ++ 
    },
    result(){
      console.log("aaaaa")
      this.calc(this.List1)
      this.$router.push('result')
    },
    calc(list){
      let arrScore = [0, 0, 0, 90, 95]
      arrScore[list[0]["id"]-1] += 10
      arrScore[list[1]["id"]-1] += 5
      arrScore[list[2]["id"]-1] += 3
      this.$store.commit('increment',arrScore)
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


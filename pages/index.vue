<template>
  <b-container class="my-5">
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
    </template>
    <template v-if="pageIndex==3">
      <b-row class="justify-content-md-center">
        <b-col xs="12" md="5">
          <draggable v-model="List3" group="people" @start="drag=true" @end="drag=false">
          <b-card v-for="(element,index) in List3" :key="element.id" class="mb-4">
            <b-card-text>{{index + 1}}位 {{element.text}}
            </b-card-text>
          </b-card> 
        </draggable>
        </b-col>
      </b-row>
    </template>
    <template v-if="pageIndex==4">
      <b-row class="justify-content-md-center">
        <b-col xs="12" md="5">
          <draggable v-model="List4" group="people" @start="drag=true" @end="drag=false">
          <b-card v-for="(element,index) in List4" :key="element.id" class="mb-4">
            <b-card-text>{{index + 1}}位 {{element.text}}
            </b-card-text>
          </b-card> 
        </draggable>
        </b-col>
      </b-row>
    </template>
   <div>
      <b-row class="justify-content-md-center mt-3">
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
          text: '経済面・雇用面での安定',
          id: 1
        },
        {
          text: 'スケジュールを自分で管理できる',
          id: 2
        },
        {
          text: '社会に貢献できる',
          id: 3
        },
        {
          text: '仕事と生活のバランス',
          id: 4
        },
        {
          text: '困難な問題に挑戦できる',
          id: 5
        }
      ],
      List2: [
        {
          text: '給料、報酬',
          id: 1
        },
        {
          text: '自律と自由がある',
          id: 2
        },
        {
          text: '人の役に立てる',
          id: 3
        },
        {
          text: 'プライベートに干渉されない',
          id: 4
        },
        {
          text: '能力を高いレベルに向上できる',
          id: 5
        }
      ],
      List3: [
        {
          text: '将来が見通せる安定性',
          id: 1
        },
        {
          text: '規則と縛りがなく、自分自身のやり方で仕事できる',
          id: 2
        },
        {
          text: '人類と社会に真に貢献できるキャリア',
          id: 3
        },
        {
          text: '自身の生活スタイルとの適合性',
          id: 4
        },
        {
          text: '手強いライバルと競いあえる環境',
          id: 5
        }
      ],
      List4: [
        {
          text: 'リスクの回避',
          id: 1
        },
        {
          text: 'ある程度はひとりで仕事を進められる仕事',
          id: 2
        },
        {
          text: '精神的なやりがいのある仕事',
          id: 3
        },
        {
          text: '多様な働き方・生き方が選択できる',
          id: 4
        },
        {
          text: '退屈ではなく刺激のある仕事',
          id: 5
        }
      ],
      selectedIndex: 0,
      pageIndex:1,
      arrScore: [0, 0, 0, 0, 0]
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
      this.calc(this.List1)
      this.calc(this.List2)
      this.calc(this.List3)
      this.calc(this.List4)
      this.$store.commit('scoring',this.arrScore)
      this.$router.push('result')
    },
    calc(list){
      this.arrScore[list[0]["id"]-1] += 25
      this.arrScore[list[1]["id"]-1] += 20
      this.arrScore[list[2]["id"]-1] += 15
      this.arrScore[list[3]["id"]-1] += 10
      this.arrScore[list[4]["id"]-1] += 5
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


<template>
  <b-container class="bv-example-row mt-5">
    <h2 class="mb-md-5">あなたの価値観は・・・</h2>
    <b-row class="justify-content-md-center">
      <b-col xs="12" md="7">
        <chart :param="param"></chart>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center mb-4">
      <b-col xs="12" md="7">
        <b-row class="justify-content-md-center">
          <b-col cols="7" md="9"></b-col>
          <b-col cols="5" md="3">
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
    <b-row class="justify-content-md-center mt-5 mb-4">
      <b-col xs="12" md="7">
        <b-card v-bind:title="'【' + typeTitle + '】 タイプ'" class="mb-4">
            <b-card-text>{{typeText}}
            </b-card-text>
          </b-card> 
      </b-col>
    </b-row>
    <nuxt-link to='/'>Home</nuxt-link>
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
      param: this.$store.state.score,
      typeTitle: "",
      typeText: ""
    }
  },
  created(){
    if(this.$store.state.score == null) {
      this.$router.push('/');
      return;
    }
    let maxScoreIndex = this.$store.state.score.indexOf(Math.max.apply(null,this.$store.state.score))
    if(maxScoreIndex==0){
      this.typeTitle="保障・安定"
      this.typeText="安定的に1つの組織に長く属することを望み、キャリアの安定に何よりも関心を持つタイプです。大きな変化を嫌い、ストレスのある職場や仕事を好みません。"
    }
    if(maxScoreIndex==1){
      this.typeTitle="自律・独立"
      this.typeText="独立することを望み、組織に属さず、何事も自分の力でやり遂げようとするタイプです。人の力を借りずに仕事したいと考える一方で、規則や規律に縛られることを好みません。"
    }
    if(maxScoreIndex==2){
      this.typeTitle="社会貢献"
      this.typeText="「世のためになるか」を最も重要と考え、自身の仕事を通して社会に貢献したいと考えるタイプです。社会に対して影響を与えられる仕事を好みます。"
    }
    if(maxScoreIndex==3){
      this.typeTitle="ワークライフバランス"
      this.typeText="仕事とプライベートどちらも大切に考え、両方のバランスを最も重視して考えるタイプです。在宅勤務やフレックス、育休制度など多様な働き方に魅力を感じます。"
    }
    if(maxScoreIndex==4){
      this.typeTitle="成長、挑戦"
      this.typeText="困難な課題を解決することを強く望み、誰しもが無理だと投げ出すような問題にこそ喜んで取り組むタイプです。挑戦することに生きがいを感じます。"
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


<template>
  <div id="app">
    <div class="loading" v-if="loadingStat">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div id="main-area" v-bind:class="{ ok: loadingComplete }">
      <div>
        <div><img src="https://www.megabitepizza.com/images/logo.png" /></div>
        <h2>{{ start_title }}</h2>

        <div v-if="page == 0" v-cloak>
          <div class="start" v-cloak v-html="start_content"></div>
          <button class="sbtn" @click="page = 1">START SURVEY</button>
        </div>

        <div v-for="(pageitem, index) in pages" :key="index" v-show="index == page - 1" class="page" v-cloak>
          <div class="p-content" v-html="pageitem.content" v-cloak></div>

          <survey-question @update:option="optionUpdate" :question="pageitem.questions" ref="questionSurvey"></survey-question>
          <button class="sbtn" @click="page = page - 1" v-if="page != 1">PREVIOUS PAGE</button>
          <button class="sbtn" type="submit" @click.prevent="checkInputs" v-if="page < pages.length">NEXT PAGE</button>
          <button class="sbtn" @click="collectAllData" v-if="page == pages.length">FINISH</button>
        </div>
      </div>
    </div>
    <div>{{ errorMessage }}</div>
  </div>
</template>

<script>
  //import HelloWorld from './components/HelloWorld.vue'
  import SurveyQuestion from "./components/SurveyQuestion.vue";

  export default {
    name: "App",
    data() {
      return {
        loadingComplete: false,
        loadingStat: true,
        start_content: "",
        start_title: "",
        page: 0,
        pages: [],
        question1: "",
        answerArr: {},
        valueEmpty: false,
        errorMessage: "",
      };
    },
    components: {
      SurveyQuestion,
    },
    methods: {
      checkInputs() {
        // this.$refs.questionSurvey.checkQuestionInputs();
        console.log("True or false: ", this.valueEmpty);
        // if (this.valueEmpty != false) {
        this.page = this.page + 1;
        console.log("Data Array: ", this.answerArr);
        // }
      },
      optionUpdate: function (value) {
        if (value[2] == "") {
          this.value = false;
        } else {
          this.value = true;
        }
        var obj = { qh: value[0], qt: value[1], qti: [{ i: value[2] }] };
        this.answerArr[value[0]] = obj;
        // console.log("Data Array: " + this.answerArr);
      },
      collectAllData() {
        if (this.valueEmpty != false) {
          console.log("Data Array 1", this.answerArr);
          const jsonObj = JSON.stringify(this.answerArr);
          console.log("Data Array ", jsonObj);
        }
      },
      firstConfig() {
        var self = this;
        const baseURI = "https://survey.androvega.ca/form?sh=s1234";
        this.$http.get(baseURI).then((result) => {
          self.start_title = result.data.title;
          self.start_content = result.data.content;
          self.pages = result.data.pages;
          self.loadingStat = false;
          self.page = 0;
          self.loadingComplete = true;
        });
      },
    },
    created() {
      this.firstConfig();
    },
  };
</script>

<style>
  [v-cloak] {
    display: none;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  #main-area {
    display: none;
  }

  #main-area.ok {
    display: block;
  }
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin-top: calc(50vh - 40px);
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  h2 {
    color: #ffffff;
    line-height: 2em;
  }
  .start {
    background: #ffffff;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
  }
  .page {
    background: #ffffff;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
  }

  .sbtn {
    padding: 10px 30px;
    border: none;
    background: #ed1d24;
    color: #ffffff;
    border-radius: 2px;
  }
</style>

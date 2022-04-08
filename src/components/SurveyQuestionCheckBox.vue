<template>
  <div class="q-area">
    <div class="text-question">{{ item.content }}<span class="requiredQuestion" v-if="item.required == 1">*</span></div>
    <div v-for="(item, index) in item.items" :key="index">
      <label><input v-on:change="optionChangedCheckbox" type="checkbox" v-model="select_data" :value="item.ihash" />{{ item.text }}</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "survey-question-check-box",
    props: ["item"],
    data() {
      return {
        select_data: [],
        questionHash: this.item.qhash,
        questionType: this.item.qtype,
        isEmpty: false,
      };
    },
    methods: {
      optionChangedCheckbox: function () {
        // console.log("type " + this.questionType);
        // console.log("qhash " + this.questionHash);
        // console.log("ihash " + this.select_data);
        this.isEmpty = false;
        this.$emit("update:optionCheckbox", [this.isEmpty, this.questionHash, this.questionType, [this.select_data]]);
      },
    },
    created() {
      //console.log("beko",this.question)
      this.isEmpty = true;
      this.$emit("update:optionCheckbox", [this.isEmpty, this.questionHash, this.questionType, [this.select_data]]);
    },
  };
</script>

<style>
  .q-area {
    text-align: left;
  }
  .text-question {
    font-weight: 700;
    line-height: 2.5;
  }
</style>

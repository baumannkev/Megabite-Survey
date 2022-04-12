<template>
  <div class="q-area">
    <div class="text-question">{{ item.content }}<span class="requiredQuestion" v-if="item.required == 1">*</span></div>
    <div v-for="(item, index) in item.items" :key="index">
      <label><input v-on:change="optionChangedRadio" type="radio" v-model="select_data" :value="item.ihash" />{{ item.text }}</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "survey-question-radio-box",
    props: ["item"],
    data() {
      return {
        select_data: "",
        questionHash: this.item.qhash,
        questionType: this.item.qtype,
        isEmpty: false,
        questionRequired: this.item.required,
      };
    },
    methods: {
      optionChangedRadio: function () {
        // console.log("required " + this.questionRequired);

        this.$emit("update:optionRadio", [this.questionHash, this.questionType, [this.select_data], this.questionRequired]);
      },
      function() {},
    },
    created() {
      // console.log("beko", this.question);
      // const validInput = !!this.select_data;
      // const formIsValid = validInput;
      // if (formIsValid) {
      //   console.log("Valid");
      // } else {
      //   console.log("Invalid");
      // }
      this.$emit("update:optionRadio", [this.questionHash, this.questionType, [this.select_data], this.questionRequired]);
      // this.$emit("update:optionRadio", [this.isEmpty, this.questionHash, this.questionType, [this.select_data]]);
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

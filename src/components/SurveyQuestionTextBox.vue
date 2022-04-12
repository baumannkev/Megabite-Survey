<template>
  <div class="q-area">
    <div class="text-question">{{ item.content }}<span class="requiredQuestion" v-if="item.required == 1">*</span></div>
    <div>
      <input v-on:change="optionChangedText" type="text" v-model="select_data" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "survey-question-text-box",
    props: ["item"],
    data() {
      return {
        select_data: "",
        questionHash: this.item.qhash,
        questionType: this.item.qtype,
        questionRequired: this.item.required,
      };
    },
    methods: {
      optionChangedText: function () {
        // if (this.itemContent == "Not from Canada? Enter the country in which you reside." && this.select_data == "") {
        //   this.$emit("update:optionText", [this.itemContent, this.select_data]);
        // }
        this.$emit("update:optionText", [this.questionHash, this.questionType, [this.select_data], this.questionRequired]);
      },
    },
    created() {
      //console.log("beko",this.question)
      this.$emit("update:optionText", [this.questionHash, this.questionType, [this.select_data], this.questionRequired]);
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

<template>
  <div>
    <div v-for="(item, index) in question" :key="index">
      <div v-if="item.qtype == 0" class="questionitem">
        <survey-question-text-box @update:optionText="optionUpdateText" :item="item"></survey-question-text-box>
      </div>
      <div v-if="item.qtype == 1" class="questionitem">
        <survey-question-radio-box @update:optionRadio="optionUpdateRadio" :item="item"></survey-question-radio-box>
      </div>
      <div v-if="item.qtype == 2" class="questionitem">
        <survey-question-check-box @update:optionCheckbox="optionUpdateCheckbox" :item="item"></survey-question-check-box>
      </div>
    </div>
  </div>
</template>

<script>
  import SurveyQuestionRadioBox from "./SurveyQuestionRadioBox.vue";
  import SurveyQuestionCheckBox from "./SurveyQuestionCheckBox.vue";
  import SurveyQuestionTextBox from "./SurveyQuestionTextBox.vue";
  export default {
    name: "survey-question",
    props: ["question"],
    data() {
      return {};
    },
    components: {
      SurveyQuestionRadioBox,
      SurveyQuestionCheckBox,
      SurveyQuestionTextBox,
    },
    methods: {
      checkQuestionInputs() {
        console.log("test");
      },
      optionUpdateRadio: function (value) {
        this.$emit("update:option", value);
        // this.$emit("update:option", { qh: value[0], qt: value[1], qti: value[2] });
      },
      optionUpdateText: function (value) {
        this.$emit("update:option", value);
        // this.$emit("update:option", { qh: value[0], qt: value[1], qti: value[2] });
      },
      optionUpdateCheckbox: function (value) {
        this.$emit("update:option", value);
        // this.$emit("update:option", { qh: value[0], qt: value[1], qti: value[2] });
      },
    },
    created() {
      //console.log("beko",this.question)
    },
  };
</script>

<style>
  .questionitem {
    margin-bottom: 20px 0;
  }
</style>

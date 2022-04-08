<template>
  <div class="container">
    <div>
      <img src="../assets/logo.png" />
    </div>
    <div class="container">
      <div v-if="whichPage == 1">
        <LoadingScreen v-if="isLoading"></LoadingScreen>
        <hr />
        <h1>{{ title }}</h1>
        <h3>{{ content }}</h3>
        <button class="btn" v-on:click="whichPage = 2">Begin Survey</button>
      </div>
      <div v-if="whichPage == 2">
        <div>Page 2</div>
        <span class="requiredCheck">* Required</span>
        <hr />
        <h3>{{ content }}</h3>
        <div class="page-1">
          <h5>
            {{ page1Questions1Title }}
            <span class="requiredCheck">{{ page1Question1Required }}</span>
          </h5>
          <div class="page1-question-1">
            <form>
              <ul>
                <li>
                  <input
                    :type="page1Question1Type"
                    id="page1q1radio1"
                    v-model="frequency"
                    :value="page1Question1Radio1"
                  />
                  <label for="page1q1radio1">{{ page1Question1Radio1 }}</label>
                </li>
                <li>
                  <input
                    :type="page1Question1Type"
                    id="page1q1radio2"
                    v-model="frequency"
                    :value="page1Question1Radio2"
                  />
                  <label for="page1q1radio2">{{ page1Question1Radio2 }}</label>
                </li>
                <li>
                  <input
                    :type="page1Question1Type"
                    id="page1q1radio3"
                    v-model="frequency"
                    :value="page1Question1Radio3"
                  />
                  <label for="page1q1radio3">{{ page1Question1Radio3 }}</label>
                </li>
                <li>
                  <input
                    :type="page1Question1Type"
                    id="page1q1radio4"
                    v-model="frequency"
                    :value="page1Question1Radio4"
                  />
                  <label for="page1q1radio4">{{ page1Question1Radio4 }}</label>
                </li>
                <li>
                  <input
                    :type="page1Question1Type"
                    id="page1q1radio5"
                    v-model="frequency"
                    :value="page1Question1Radio5"
                  />
                  <label for="page1q1radio5">{{ page1Question1Radio5 }}</label>
                </li>
              </ul>
            </form>
          </div>

          <h5>
            {{ page1Questions2Title }}
            <span class="requiredCheck">{{ page1Question2Required }}</span>
          </h5>
          <div class="page1-question-2">
            <form>
              <ul>
                <li>
                  <input
                    :type="page1Question2Type"
                    id="page1q2cb1"
                    v-model="checkedPizzas"
                    :value="page1Question2Checkbox1"
                  />
                  <label for="page1q2cb1">{{ page1Question2Checkbox1 }}</label>
                </li>
                <li>
                  <input
                    :type="page1Question2Type"
                    id="page1q2cb2"
                    v-model="checkedPizzas"
                    :value="page1Question2Checkbox2"
                  />
                  <label for="page1q2cb2">{{ page1Question2Checkbox2 }}</label>
                </li>
                <li>
                  <input
                    :type="page1Question2Type"
                    id="page1q1cb3"
                    v-model="checkedPizzas"
                    :value="page1Question2Checkbox3"
                  />
                  <label for="page1q2cb3">{{ page1Question2Checkbox3 }}</label>
                </li>
              </ul>
            </form>
          </div>
          <h5>
            {{ page1Questions3Title }}
            <span class="requiredCheck">{{ page1Question3Required }}</span>
          </h5>
          <div class="page1-question-3">
            <form>
              <ul>
                <li>
                  <input
                    :type="page1Question3Type"
                    id="page1q3radio1"
                    v-model="education"
                    :value="page1Question3Radio1"
                  />
                  <label for="page1q3radio1">{{ page1Question3Radio1 }}</label>
                </li>
                <li>
                  <input
                    :type="page1Question3Type"
                    id="page1q3radio2"
                    v-model="education"
                    :value="page1Question3Radio2"
                  />
                  <label for="page1q3radio2">{{ page1Question3Radio2 }}</label>
                </li>
                <li>
                  <input
                    :type="page1Question3Type"
                    id="page1q3radio3"
                    v-model="education"
                    :value="page1Question3Radio3"
                  />
                  <label for="page1q3radio3">{{ page1Question3Radio3 }}</label>
                </li>
                <li>
                  <input
                    :type="page1Question3Type"
                    id="page1q3radio4"
                    v-model="education"
                    :value="{ page1Question3Radio4 }"
                  />
                  <label for="page1q3radio4">{{ page1Question3Radio4 }}</label>
                </li>
                <li>
                  <input
                    :type="page1Question3Type"
                    id="page1q3radio5"
                    v-model="education"
                    :value="page1Question3Radio5"
                  />
                  <label for="page1q3radio5">{{ page1Question3Radio5 }}</label>
                </li>
                <li>
                  <input
                    :type="page1Question3Type"
                    id="page1q3radio6"
                    v-model="education"
                    :value="{ page1Question3Radio6 }"
                  />
                  <label for="page1q3radio6">{{ page1Question3Radio6 }}</label>
                </li>
                <li>
                  <input
                    :type="page1Question3Type"
                    id="page1q3radio7"
                    v-model="education"
                    :value="page1Question3Radio7"
                  />
                  <label for="page1q3radio7">{{ page1Question3Radio7 }}</label>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <hr />
        <button class="btn" v-on:click="whichPage = 1">Back</button>
        <button class="btn" v-on:click="checkValidPageOne">Next</button>
        <span class="requiredCheck">{{ validMessage }}</span>
        <!-- <button class="btn" :v-if="whichPage = 3">Next</button> -->
      </div>
      <div v-if="whichPage == 3">
        <div>Page 3</div>
        <hr />
        <h3>{{ content }}</h3>
        <div class="page-2">
          <h5>
            {{ page2Questions1Title }}
            <span class="requiredCheck">{{ page2Question1Required }}</span>
          </h5>
          <div class="page2-question-1">
            <form>
              <input
                :type="page2Question1Type"
                id="page2q1text1"
                v-model="country"
              />
            </form>
          </div>

          <h5>
            {{ page2Questions2Title }}
            <span class="requiredCheck">{{ page2Question2Required }}</span>
          </h5>

          <div class="page2-question-2">
            <form>
              <input
                :type="page2Question2Type"
                id="page2q2text1"
                v-model="postalCode"
              />
            </form>
          </div>

          <h5>
            {{ page2Questions3Title }}
            <span class="requiredCheck">{{ page2Question3Required }}</span>
          </h5>
          <div class="page2-question-3">
            <form>
              <ul>
                <li>
                  <input
                    :type="page2Question3Type"
                    id="page2q3radio1"
                    v-model="gender"
                    :value="page2Question3Radio1"
                  />
                  <label for="page2q3radio1">{{ page2Question3Radio1 }}</label>
                </li>
                <li>
                  <input
                    :type="page2Question3Type"
                    id="page2q3radio2"
                    v-model="gender"
                    :value="page2Question3Radio2"
                  />
                  <label for="page2q3radio2">{{ page2Question3Radio2 }}</label>
                </li>
                <li>
                  <input
                    :type="page2Question3Type"
                    id="page2q3radio3"
                    v-model="gender"
                    :value="page2Question3Radio3"
                  />
                  <label for="page2q3radio3">{{ page2Question3Radio3 }}</label>
                </li>
                <li>
                  <input
                    :type="page2Question3Type"
                    id="page2q3radio4"
                    v-model="gender"
                    :value="page2Question3Radio4"
                  />
                  <label for="page2q3radio4">{{ page2Question3Radio4 }}</label>
                </li>
              </ul>
            </form>
          </div>

          <h5>
            {{ page2Questions4Title }}
            <span class="requiredCheck">{{ page2Question4Required }}</span>
          </h5>
          <div class="page2-question-4">
            <form>
              <ul>
                <li>
                  <input
                    :type="page2Question4Type"
                    id="page2q4radio1"
                    v-model="age"
                    :value="page2Question4Radio1"
                  />
                  <label for="page2q4radio1">{{ page2Question4Radio1 }}</label>
                </li>
                <li>
                  <input
                    :type="page2Question4Type"
                    id="page2q4radio2"
                    v-model="age"
                    :value="page2Question4Radio2"
                  />
                  <label for="page2q4radio2">{{ page2Question4Radio2 }}</label>
                </li>
                <li>
                  <input
                    :type="page2Question4Type"
                    id="page2q4radio3"
                    v-model="age"
                    :value="page2Question4Radio3"
                  />
                  <label for="page2q4radio3">{{ page2Question4Radio3 }}</label>
                </li>
                <li>
                  <input
                    :type="page2Question4Type"
                    id="page2q4radio4"
                    v-model="age"
                    :value="{ page2Question4Radio4 }"
                  />
                  <label for="page2q4radio4">{{ page2Question4Radio4 }}</label>
                </li>
                <li>
                  <input
                    :type="page2Question4Type"
                    id="page2q5radio4"
                    v-model="age"
                    :value="page2Question4Radio5"
                  />
                  <label for="page2q5radio5">{{ page2Question4Radio5 }}</label>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <hr />
        <button class="btn" v-on:click="whichPage = 2">Back</button>
        <button class="btn" v-on:click="checkValidPageTwo">Complete</button>
        <span class="requiredCheck">{{ validMessagePageTwo }}</span>
      </div>
      <div v-if="whichPage == 4">
        <div>Survey Complete</div>

        <div class="container">
          <h5>Thank you for participating in the survey!</h5>

          <p>Page 1</p>
          <div>Store order frequency: {{ frequency }}</div>
          <div>Typical Pizza Order: {{ checkedPizzas }}</div>
          <div>Level of Education: {{ education }}</div>
          <p>Page 2</p>
          <div>Country: {{ country }}</div>
          <div>Postal Code: {{ postalCode }}</div>
          <div>Gender {{ gender }}</div>
          <div>Age: {{ age }}</div>
        </div>
      </div>
    </div>
    <!-- <router-link to="/SurveyPageOne"
      ><button class="btn">Begin Survey</button></router-link
    > -->
  </div>
</template>

<script>
// import "bootstrap/dist/css/bootstrap.css";
import LoadingScreen from "../components/loadingComponent";
const axios = require("axios");

export default {
  name: "HomeComponent",
  data() {
    return {
      // Answers
      checkedPizzas: [],
      frequency: "",
      education: "",
      country: "",
      postalCode: "",
      gender: "",
      age: "",

      whichPage: 1,
      validMessage: "",
      validMessagePageTwo: "",

      title: "",
      content: "",

      // Page 1 data
      page1Question1Required: "",
      page1Question1Type: "",
      page1Questions1Title: "",
      page1Question1Radio1: "",
      page1Question1Radio2: "",
      page1Question1Radio3: "",
      page1Question1Radio4: "",
      page1Question1Radio5: "",

      page1Question2Required: "",
      page1Question2Type: "",
      page1Questions2Title: "",
      page1Question2Checkbox1: "",
      page1Question2Checkbox2: "",
      page1Question2Checkbox3: "",

      page1Question3Required: "",
      page1Question3Type: "",
      page1Questions3Title: "",
      page1Question3Radio1: "",
      page1Question3Radio2: "",
      page1Question3Radio3: "",
      page1Question3Radio4: "",
      page1Question3Radio5: "",
      page1Question3Radio6: "",
      page1Question3Radio7: "",

      // Page 2 data
      content: "",
      page2: "",
      page2Question1Required: "",
      page2Question1Type: "",
      page2Questions1Title: "",

      page2Question2Required: "",
      page2Question2Type: "",
      page2Questions2Title: "",

      page2Question3Required: "",
      page2Question3Type: "",
      page2Questions3Title: "",
      page2Question3Radio1: "",
      page2Question3Radio2: "",
      page2Question3Radio3: "",
      page2Question3Radio4: "",

      page2Question4Required: "",
      page2Question4Type: "",
      page2Questions4Title: "",
      page2Question4Radio1: "",
      page2Question4Radio2: "",
      page2Question4Radio3: "",
      page2Question4Radio4: "",
      page2Question4Radio5: "",
    };
  },
  methods: {
    checkValidPageOne() {
      if (
        this.frequency != "" &&
        this.checkedPizzas != "" &&
        this.education != ""
      ) {
        this.whichPage = 3;
      } else {
        this.validMessage = "Please enter all required inputs";
      }
    },
    checkValidPageTwo() {
      if (this.country == "") this.country = "Canada";

      if (this.postalCode != "" && this.gender != "" && this.age != "") {
        this.whichPage = 4;
        this.submit();
      } else {
        this.validMessagePageTwo = "Please enter all required inputs";
      }
    },
    getSurveyData() {
      this.isLoading = true;
      const endPointRoot = "https://survey.androvega.ca/form?sh=s1234";
      axios
        .get(endPointRoot)
        .then((response) => {
          // handle success
          console.log(response.data);
          const obj = response.data;

          // Home Title and Description
          this.title = obj.title;
          this.content = obj.content;

          // Page 1 Data

          // Question 1
          this.page1Questions1Title = obj.pages[0].questions[0].content;

          if (obj.pages[0].questions[0].qtype == 0) {
            this.page1Question1Type = "text";
          } else if (obj.pages[0].questions[0].qtype == 1) {
            this.page1Question1Type = "radio";
          } else if (obj.pages[0].questions[0].qtype == 2) {
            this.page1Question1Type = "checkbox";
          }
          this.page1Question1Radio1 = obj.pages[0].questions[0].items[0];
          this.page1Question1Radio2 = obj.pages[0].questions[0].items[1];
          this.page1Question1Radio3 = obj.pages[0].questions[0].items[2];
          this.page1Question1Radio4 = obj.pages[0].questions[0].items[3];
          this.page1Question1Radio5 = obj.pages[0].questions[0].items[4];

          // Question 2
          this.page1Questions2Title = obj.pages[0].questions[1].content;

          if (obj.pages[0].questions[1].qtype == 0) {
            this.page1Question2Type = "text";
          } else if (obj.pages[0].questions[1].qtype == 1) {
            this.page1Question2Type = "radio";
          } else if (obj.pages[0].questions[1].qtype == 2) {
            this.page1Question2Type = "checkbox";
          }
          this.page1Question2Checkbox1 = obj.pages[0].questions[1].items[0];
          this.page1Question2Checkbox2 = obj.pages[0].questions[1].items[1];
          this.page1Question2Checkbox3 = obj.pages[0].questions[1].items[2];

          // Question 3
          this.page1Questions3Title = obj.pages[0].questions[2].content;

          if (obj.pages[0].questions[2].qtype == 0) {
            this.page1Question3Type = "text";
          } else if (obj.pages[0].questions[2].qtype == 1) {
            this.page1Question3Type = "radio";
          } else if (obj.pages[0].questions[2].qtype == 2) {
            this.page1Question3Type = "checkbox";
          }
          this.page1Question3Radio1 = obj.pages[0].questions[2].items[0];
          this.page1Question3Radio2 = obj.pages[0].questions[2].items[1];
          this.page1Question3Radio3 = obj.pages[0].questions[2].items[2];
          this.page1Question3Radio4 = obj.pages[0].questions[2].items[3];
          this.page1Question3Radio5 = obj.pages[0].questions[2].items[4];
          this.page1Question3Radio6 = obj.pages[0].questions[2].items[5];
          this.page1Question3Radio7 = obj.pages[0].questions[2].items[6];

          if (obj.pages[0].questions[0].required == "1") {
            this.page1Question1Required = "*";
          }

          if (obj.pages[0].questions[1].required == "1") {
            this.page1Question2Required = "*";
          }

          if (obj.pages[0].questions[2].required == "1") {
            this.page1Question3Required = "*";
          }
          // Page 2 Data
          this.content = obj.pages[1].content;

          //Question 1
          this.page2Questions1Title = obj.pages[1].questions[0].content;

          if (obj.pages[1].questions[0].qtype == 0) {
            this.page2Question1Type = "text";
          } else if (obj.pages[1].questions[0].qtype == 1) {
            this.page2Question1Type = "radio";
          } else if (obj.pages[1].questions[0].qtype == 2) {
            this.page2Question1Type = "checkbox";
          }

          this.page2Questions2Title = obj.pages[1].questions[1].content;

          this.page2Questions3Title = obj.pages[1].questions[2].content;
          this.page2Question3Radio1 = obj.pages[1].questions[2].items[0];
          this.page2Question3Radio2 = obj.pages[1].questions[2].items[1];
          this.page2Question3Radio3 = obj.pages[1].questions[2].items[2];
          this.page2Question3Radio4 = obj.pages[1].questions[2].items[3];

          this.page2Questions4Title = obj.pages[1].questions[3].content;
          this.page2Question4Radio1 = obj.pages[1].questions[3].items[0];
          this.page2Question4Radio2 = obj.pages[1].questions[3].items[1];
          this.page2Question4Radio3 = obj.pages[1].questions[3].items[2];
          this.page2Question4Radio4 = obj.pages[1].questions[3].items[3];
          this.page2Question4Radio5 = obj.pages[1].questions[3].items[4];

          if (obj.pages[1].questions[0].required == "1") {
            this.page2Question1Required = "*";
          }

          if (obj.pages[1].questions[1].required == "1") {
            this.page2Question2Required = "*";
          }

          if (obj.pages[1].questions[2].required == "1") {
            this.page2Question3Required = "*";
          }

          if (obj.pages[1].questions[3].required == "1") {
            this.page2Question4Required = "*";
          }
          this.isLoading = false;
        })
        .catch((error) => {
          // handle error
          this.isLoading = true;
          this.title = "Error loading data";
          console.log(error);
          this.isLoading = false;
        })
        .then(function () {
          // always executed
        });
    },
    submit() {
      const totalData = {
        storeOrderFrequency: this.frequency,
        typicalPizzas: this.checkedPizzas,
        education: this.education,
        country: this.country,
        postalCode: this.postalCode,
        gender: this.gender,
        age: this.age,
      };
      const jsonData = JSON.stringify(totalData);
      console.log("Survey Results: " + jsonData);
    },
  },
  components: {
    LoadingScreen,
  },
  mounted() {
    // this.isLoading = true;
    this.getSurveyData();
    // setTimeout(() => {
    //   this.getSurveyData();
    //   this.isLoading = false;
    // }, 500);
  },
};
</script>

<style>
img {
  background-color: black;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

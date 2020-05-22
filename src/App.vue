<template>
<div class="wrapper">
  <h1 class="title has-text-centered">Calculator using Express.js</h1>
  <div class="box">
    <div class="columns is-centered">
      <input class="input screen" type="text" v-model="current_value" :placeholder="current_value">
    </div>
    <div class="columns is-mobile is-vcentered is-centered">
      <div class="column has-text-centered is-2" v-for="(button, index) in operators" :key="index">
        <a class="button is-info" @click="operator_clicked(button.operator)">{{button.sign}}</a>
      </div>
    </div>
    <div class="columns is-mobile has-text-centered is-multiline is-centered">
      <div class="column is-3" v-for="(number, index) in numbers" :key="index">
        <a @click="current(number)" class="button is-info">{{number}}</a>
      </div>  
      <div class="column is-3">
        <a @click="clear()" class="button is-info">AC</a>
      </div>
      <div class="column is-3">
        <a @click="decimal()" class="button is-info">.</a>
      </div>
      <div class="column is-3">
        <a @click="equals()" class="button is-info">=</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
    info: null,
    operator: "",
    numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    current_value: "0",
    operators: [
      {
        sign: "+",
        operator: "add"
      },
      {
        sign: "-",
        operator: "subtract"
      },
      {
        sign: "x",
        operator: "multiply"
      },
      {
        sign: "/",
        operator: "divide"
      }
    ],
    logged_value: "0",
    }
  },
  methods: {
    clear() {
      this.current_value = "0";
      this.logged_value = null;
      this.operator = "";
    },
    current(value) {
      if (this.current_value == "0" || this.current_value == this.logged_value) {
        this.current_value = "";
      }
      return this.current_value += value;
    },
    equals() {  
      axios
      .get(`http://localhost:3000/${this.operator}/${this.logged_value}/${this.current_value}`)
      .then(response => isNaN(response.data) ? this.current_value = "Sorry, the answer was not a number!" : this.current_value = response.data)
      .catch(error => {
        this.current_value = "Sorry, there was an error!";
        console.log(error)}
        );
    },
    operator_clicked(operator) {
      this.operator = operator;
      this.logged_value = this.current_value; 

    },
    decimal() {
      if (!this.current_value.includes(".")) {
        this.current_value += ".";
      }      
    },
  },
}
</script>

<style>

.box {
  width: 50%;
  margin: auto;
  border: 1px solid #3298dc;
  height: 25rem;
}

.screen {
  background-color: #3298dc;
  text-align: right;
  border-radius: 10px;
  color: white; 
}

.value {
  padding-right: 2rem;
}

.wrapper {
  margin: 4rem;
}
</style>

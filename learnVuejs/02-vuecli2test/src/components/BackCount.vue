<template>
<div v-show="num2">
  <div class="backCount" :style="getStyle()">
   <div class="numCountainer" :style="getCountSecond()">
     {{num2}}
   </div>
  </div>
  <!-- <button @click="backCount">start</button> -->
</div> 
</template>

<script>
export default {
  name: 'BackCount',
  props: {
    num: {
      type: Number,
      default: 3
    },
    bgC: {
      type: String,
      default: '#74b9ff'
    },
    width: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      num2: 0,
      begin: false
    }
  },
  mounted () {
    this.num2 = this.num;
    let countdown = setInterval(this.countDown,1000)
  },
  methods: {
    // backCount() {
    //   let countdown = setInterval(this.countDown,1000)
    // },
    countDown() {
      if (this.num2 > 0) {
        this.num2--
      }
      else {
        clearInterval
      }
    },
    getStyle() {
      return {
        backgroundColor: this.bgC,
        width: this.width + 'px',
        height: this.width + 'px',
        fontSize: this.width * 0.8 + 'px'
      }
    },
    getCountSecond() {
      return {
        animationIterationCount: this.num
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.backCount {
  /* width: 100px;
  height: 100px; */
  /* background-color: #74b9ff; */
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  /* font-size: 80px; */
}
.numCountainer {
  font-family:'Times New Roman', Times, serif;
  animation-name: changeSize;
  animation-duration: 1s;
  /* animation-iteration-count: 3; */
}
@keyframes changeSize {
  0% {
    font-size: 12px;
  }
  100% {
    font-size: 80%;
  }
}
</style>

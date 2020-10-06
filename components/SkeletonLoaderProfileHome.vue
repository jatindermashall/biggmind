<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-4 pt-5">
        <div class="placeholder wave">
          <div class="square"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="col-xl-4 pt-5">
        <div class="placeholder wave">
          <div class="circle"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="col-xl-4 pt-5">
        <div class="placeholder wave">
          <div class="rectangle"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SkeletonLoaderProfileHome"
  // props: {
  //   loading: {
  //     type: Boolean,
  //     default: false,
  //     required: true
  //   }
  // }
};
</script>
<style scoped lang="scss">
.placeholder {
  margin: 15px;
  padding: 10px;
  border-radius: 5px;
  &.pulse div {
    animation: pulse 1s infinite ease-in-out;
    -webkit-animation: pulse 1s infinite ease-in-out;
  }
  &.wave div {
    animation: wave 1s infinite linear forwards;
    -webkit-animation: wave 1s infinite linear forwards;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
  }
  div {
    background: #e8e8e8;
  }
  .square {
    float: left;
    width: 30px;
    height: 30px;
    margin: 0 0 10px;
  }
  .rectangle {
    float: left;
    width: 40px;
    height: 30px;
    margin: 0 0 10px;
  }
  .line {
    height: 12px;
    margin: 0 0 10px 50px;
    width: 70%;
  }
  .circle {
    float: left;
    width: 240px;
    height: 240px;
    margin: 0 15px 10px 0;
    border-radius: 40px;
  }
}
@keyframes pulse {
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
}
@-webkit-keyframes pulse {
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
}
@keyframes wave {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
@-webkit-keyframes wave {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
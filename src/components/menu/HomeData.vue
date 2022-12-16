<template>
  <div class="data">
    <e-charts class="echarts" :option="option" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
      }
    }
  }
}
</script>

<style>
  .echarts {
    height: 400px;
  }
</style>
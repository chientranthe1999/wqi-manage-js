<template>
  <div class="bg--white pd-1-em box-shadow-bordered h-[300px]">
    <div class="flex border-b mb-[1em]">
      <div class="pb-1-em max-w-[60%] location">
        <v-icon icon-class="location" />
        <span class="location">Location: {{ wqi.location }}</span>
      </div>
      <div class="ml-auto">{{ wqi.time }}</div>
    </div>
    <div class="daily-content flex">
      <!-- left content -->
      <div class="w-[30%]">
        <ul>
          <li class="wqi-infor text-center">
            <v-icon icon-class="temperature" />
            <span> temperature</span>
            <div>{{ wqi.temperature }}C</div>
          </li>

          <li class="wqi-infor text-center">
            <v-icon icon-class="turbidity" />
            <span> turbidity</span>
            <div>{{ wqi.turbidity }}</div>
          </li>

          <li class="wqi-infor text-center">
            <v-icon icon-class="chemistry" />
            <span> BOD5</span>
            <div>{{ wqi.bod }}</div>
          </li>
        </ul>
      </div>

      <!-- wqi -->
      <div class="w-[40%] flex align-items-center">
        <div class="rounded-[50%] wqi-number" :class="wqiBg(40)">
          <span> WQI</span>
          <span>{{ wqi.wqi }}</span>
        </div>
      </div>

      <!-- right content -->
      <div class="w-[30%] text-left">
        <ul class="list-item-right">
          <li class="wqi-infor wqi-infor-right text-center">
            <v-icon icon-class="ph" />
            <span> Ph</span>
            <div>{{ wqi.pH }}</div>
          </li>
          <li class="wqi-infor wqi-infor-right text-center">
            <v-icon icon-class="chemistry" />
            <span> DO</span>
            <div>{{ wqi.dO }}</div>
          </li>
          <li class="wqi-infor wqi-infor-right text-center">
            <v-icon icon-class="chemistry" />
            <span> NH4</span>
            <div>{{ wqi.nh4 }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    wqi: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {
    wqiBg() {
      return (wqi) => {
        if (wqi >= 0 && wqi <= 25) {
          return 'wqi--bad'
        } else if (wqi > 25 && wqi <= 50) {
          return 'wqi--warning'
        } else if (wqi > 50 && wqi <= 75) {
          return 'wqi--mid'
        } else if (wqi > 75 && wqi <= 90) {
          return 'wqi--medium'
        } else if (wqi > 90 && wqi <= 100) {
          return 'wqi--good'
        }
      }
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/variables.scss';

.location {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.max-width-85 {
  max-width: 85%;
}

.list-item-right {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

.wqi--bad {
  background-color: $red;
}

.wqi--warning {
  background-color: $warning;
}

.wqi--mid {
  background-color: #eeff41;
  color: #3a3a3a;
}

.wqi--medium {
  background-color: $success;
}

.wqi--good {
  background-color: $blue;
}
</style>

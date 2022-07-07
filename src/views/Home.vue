<template>
  <div class="content-main-container">
    <!-- device list -->
    <el-row :gutter="24" class="mb-4">
      <el-col :xs="24" :sm="24" :md="12" class="mb-[1rem]">
        <section class="card-items h-[300px]">
          <!-- header -->
          <div class="flex align-items-center card-header" @click="$router.push({ name: 'DeviceList' })">
            <p class="title-text">Device List</p>
            <i class="el-icon-arrow-right ml-auto" />
          </div>
          <!-- content -->
          <ul class="card-content">
            <li v-for="device in devices" :key="device.id" class="card-content-items flex align-items-center">
              <div class="max-w-85">
                <div>{{ device.name }}</div>
                <div class="location"><i class="el-icon-map-location" />: {{ device.location }}</div>
              </div>
              <i class="el-icon-s-promotion ml-auto f-2" />
            </li>
          </ul>
        </section>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12">
        <wqi-item :wqi="wqi" />
      </el-col>
    </el-row>

    <template>
      <el-row :gutter="24">
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
          <div class="bg--white box-shadow-bordered">
            <p class="font-bold p-[1rem]">WQI chart</p>
            <apexchart type="bar" :height="450" :options="chartOptions" :series="series" class="w-full px-[1rem] h-[400px]" />
          </div>
        </el-col>
      </el-row>
    </template>
  </div>
</template>
<script>
import { dashboard } from '@/apis/infor'
import moment from 'moment'
export default {
  data() {
    return {
      devices: [],
      wqi: {},
      chartOptions: {
        chart: {
          id: 'WQI chart'
        },
        xaxis: {
          categories: []
        }
      },
      series: [
        {
          name: 'WQI',
          data: []
        }
      ]
    }
  },
  async created() {
    try {
      await this.getInfor()
    } catch (e) {
      console.log(e)
    }
  },

  methods: {
    async getInfor() {
      const res = await dashboard()
      const xaxis = []
      this.series[0].data = res.data.items?.infors?.map((item) => {
        xaxis.push(moment(item.created_at).format('HH:mm MM/DD'))
        return Number(item.wqi).toFixed(1)
      })

      this.chartOptions = {
        ...this.chartOptions,
        xaxis: {
          categories: xaxis
        }
      }

      const { devices, nh4, bod, turbidity, temperature, wqi, created_at } = res.data.items.newest
      const dO = res.data.items.newest.do
      const pH = res.data.items.newest.ph

      this.wqi = {
        location: devices.location,
        time: moment(created_at).format('HH:mm MM/DD'),
        nh4: Number(nh4).toFixed(1),
        bod: Number(bod).toFixed(1),
        turbidity: Number(turbidity).toFixed(1),
        temperature: Number(temperature).toFixed(1),
        wqi: Number(wqi).toFixed(1),
        dO: Number(dO).toFixed(1),
        pH: Number(pH).toFixed(1)
      }

      this.devices = res.data.items.devices
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/variables.scss';
.card-items {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  // border: 1px solid #f1f2f3;
  border-radius: 4px;
  background-color: white;

  .card-header {
    padding: 1rem;
    cursor: pointer;
    border-bottom: 1px solid #e8e8e8;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateX(10px);
    }
  }

  .card-content {
    padding: 0.5rem 0;

    .card-content-items {
      padding: 0.75rem;
      border-radius: 4px;
      position: relative;
      cursor: pointer;
      &:hover {
        box-shadow: 0 6px 18px -8px rgba(94, 86, 105, 0.56);
        color: $primaryColor !important;
      }

      &:hover::before {
        display: block;
      }
    }

    .card-content-items::before {
      content: '';
      height: 100%;
      width: 3px;
      background-color: $primaryColor;
      position: absolute;
      left: 0;
      display: none;
    }
  }

  .title-text {
    width: fit-content;
    padding: 0.25rem 1rem;
    border-radius: 5px;
    background-color: $primaryColor;
    font-weight: 700;
    color: white;
  }
}
</style>

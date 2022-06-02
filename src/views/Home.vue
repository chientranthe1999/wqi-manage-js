<template>
  <div class="content-main-container">
    <!-- device list -->
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :md="12">
        <section class="card-items">
          <!-- header -->
          <div class="flex align-items-center card-header" @click="$router.push({ name: 'device' })">
            <p class="title-text">Device List</p>
            <i class="el-icon-arrow-right ml-auto" />
          </div>
          <!-- content -->
          <ul class="card-content">
            <li class="card-content-items flex align-items-center">
              <div class="max-w-85">
                <div>ChienTT</div>
                <div class="location"><i class="el-icon-map-location" />: 1213</div>
              </div>
              <i class="el-icon-s-promotion ml-auto f-2" />
            </li>
            <li class="card-content-items flex align-items-center">
              <div class="max-w-85">
                <div>ChienTT</div>
                <div class="location"><i class="el-icon-map-location" />: 1213</div>
              </div>
              <i class="el-icon-s-promotion ml-auto f-2" />
            </li>
            <li class="card-content-items flex align-items-center">
              <div class="max-w-85">
                <div>ChienTT</div>
                <div class="location"><i class="el-icon-map-location" />: 1213</div>
              </div>
              <i class="el-icon-s-promotion ml-auto f-2" />
            </li>
          </ul>
        </section>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12">
        <div class="bg--white pd-1-em box-shadow-bordered">
          <div class="header flex">
            <div class="pb-1-em"><v-icon icon-class="location" /><span>Location</span></div>
            <div class="ml-auto">Time</div>
          </div>
          <div class="daily-content flex">
            <!-- left content -->
            <div class="w-30">
              <ul>
                <li class="wqi-infor text-center">
                  <v-icon icon-class="temperature" />
                  <span> temperature</span>
                  <div>21C</div>
                </li>

                <li class="wqi-infor text-center">
                  <v-icon icon-class="turbidity" />
                  <span> turbidity</span>
                  <div>21C</div>
                </li>

                <li class="wqi-infor text-center">
                  <v-icon icon-class="chemistry" />
                  <span> BOD5</span>
                  <div>21C</div>
                </li>
              </ul>
            </div>

            <!-- wqi -->
            <div class="w-40 flex align-items-center">
              <div class="rounded wqi-number mb-16 wqi--mid">
                <span> WQI</span>
                <span>40</span>
              </div>
            </div>

            <!-- right content -->
            <div class="w-30 text-left">
              <ul class="list-item-right">
                <li class="wqi-infor wqi-infor-right text-center">
                  <v-icon icon-class="ph" />
                  <span> Ph</span>
                  <div>21</div>
                </li>
                <li class="wqi-infor wqi-infor-right text-center">
                  <v-icon icon-class="chemistry" />
                  <span> DO</span>
                  <div>21</div>
                </li>
                <li class="wqi-infor wqi-infor-right text-center">
                  <v-icon icon-class="chemistry" />
                  <span> NH4</span>
                  <div>21</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- <section class="card-items"> -->
        <!-- header -->
        <!-- <div class="flex align-items-center card-header">
            <p class="title-text">User list</p>
            <i class="el-icon-arrow-right ml-auto" />
          </div> -->
        <!-- content -->
        <!-- <ul class="card-content">
            <li class="card-content-items flex align-items-center">
              <span>ChienTT</span>
              <i class="el-icon-s-promotion ml-auto f-2" />
            </li>
            <li class="card-content-items flex align-items-center">
              <span>ChienTT</span>
              <i class="el-icon-s-promotion ml-auto f-2" />
            </li>
            <li class="card-content-items flex align-items-center">
              <span>ChienTT</span>
              <i class="el-icon-s-promotion ml-auto f-2" />
            </li>
          </ul> -->
        <!-- </section> -->
      </el-col>
    </el-row>

    <template>
      <div class="bg--white">
        <!-- <apexchart width="700" type="bar" :options="options" :series="series" /> -->
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      series: [40],
      chartOptions: {
        chart: {
          height: 300,
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%'
            }
          },
          dataLabels: {
            showOn: 'always',
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '18px'
            },
            value: {
              color: '#111',
              fontSize: '30px',
              show: true
            }
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['WQI']
      }
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
    padding: 0 1rem;
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

.location {
  font-size: 0.8em;
}

.max-width-85 {
  max-width: 85%;
}
</style>

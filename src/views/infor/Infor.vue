<template lang="">
  <div>
    <v-header :has-button="false" :button-text="$t('button.add')" :title-text="$t('title.wqi')" />
    <div class="content-main-container">
      <main class="box-shadow-bordered bg-white rounded-[5px] p-[1em]">
        <!-- header -->
        <el-row class="mb-[1em]">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form label-position="left" label-width="120px">
              <el-form-item :label="$t('router.device')">
                <el-select class="w-full" />
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>

        <!-- result table -->
        <v-table :table-data="results" :columns="cols" :limit="limit" :page="page" :total="total" />
      </main>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      results: [],
      page: 1,
      limit: 20,
      cols: [
        {
          prop: 'device',
          label: this.$t('router.device'),
          minWidth: '10'
        },
        {
          prop: 'time',
          label: this.$t('label.time'),
          minWidth: '10'
        },
        {
          prop: 'temperature',
          label: this.$t('label.temperature'),
          minWidth: '10'
        },
        {
          prop: 'pH',
          label: this.$t('label.pH'),
          minWidth: '10'
        },
        {
          prop: 'turbidity',
          label: this.$t('label.turbidity'),
          minWidth: '10'
        },
        {
          prop: 'do',
          label: this.$t('label.DO'),
          minWidth: '10'
        },
        {
          prop: 'nh4',
          label: this.$t('label.NH4'),
          minWidth: '10'
        },
        {
          prop: 'bod5',
          label: this.$t('label.BOD5'),
          minWidth: '10'
        },
        {
          prop: 'tss',
          label: this.$t('label.tss'),
          minWidth: '10'
        },
        {
          prop: 'coliform',
          label: this.$t('label.coliform'),
          minWidth: '10'
        },
        {
          prop: 'wqi',
          label: this.$t('label.wqi'),
          minWidth: '10'
        }
      ]
    }
  }
}
</script>
<style lang="scss"></style>

import { getCompanies, getCars, getProviders } from '@/apis/common'
import { HTTP_STATUS } from '@/utils/constants.js'

export default {
  data() {
    return {
      rules: {
        company_id: { required: true, message: this.$t('validation.required', { attribute: this.$t('label.company') }), trigger: 'change' },
        car_id: { required: true, message: this.$t('validation.required', { attribute: this.$t('label.car') }), trigger: 'change' },
        name: { required: true, message: this.$t('validation.required', { attribute: this.$t('label.name') }), trigger: 'blur' },
        code: { required: true, message: this.$t('validation.required', { attribute: this.$t('label.code') }), trigger: 'blur' }
      },

      companies: [],
      cars: [],
      providers: []
    }
  },

  methods: {
    async getCompanyOptions() {
      const res = await getCompanies()
      if (res.status === HTTP_STATUS.OK) {
        this.companies = res.data.items
      }
    },

    async getCarOptions(companyId) {
      const res = await getCars({ company_id: companyId })
      if (res.status === HTTP_STATUS.OK) {
        this.cars = res.data.items
      }
    },
    async getProviderOptions() {
      const res = await getProviders()
      if (res.status === HTTP_STATUS.OK) {
        this.providers = res.data.items
      }
    },

    async onChangeCompany(val) {
      await this.getCarOptions({ company_id: val })
    }

  }
}

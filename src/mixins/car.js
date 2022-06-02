import { getCompanies } from '@/apis/common'
import { HTTP_STATUS } from '@/utils/constants.js'

export default {
  data() {
    return {
      rules: {
        company_id: { required: true, message: this.$t('validation.required', { attribute: this.$t('label.company') }), trigger: 'change' },
        name: { required: true, message: this.$t('validation.required', { attribute: this.$t('label.name') }), trigger: 'blur' },
        code: { required: true, message: this.$t('validation.required', { attribute: this.$t('label.code') }), trigger: 'blur' }
      }
    }
  },
  methods: {
    async getCompanyOptions() {
      const res = await getCompanies()
      if (res.status === HTTP_STATUS.OK) {
        this.companies = res.data.items
      }
    }
  }
}

import { NUMBER_PATTERN } from '@/utils/constants'
export default {
  data() {
    return {
      rules: {
        phone: [
          { required: true, message: this.$t('validation.required', { attribute: this.$t('label.company') }), trigger: 'change' },
          { pattern: NUMBER_PATTERN, message: this.$t('text.only_number') }
        ],
        name: { required: true, whitespace: true, message: this.$t('validation.required', { attribute: this.$t('label.name') }), trigger: 'blur' }
      }
    }
  }
}

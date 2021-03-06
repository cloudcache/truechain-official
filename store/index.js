export const state = () => ({
  locales: ['en', 'zh', 'ko', 'vi', 'default'],
  locale: 'default'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

import { createI18n } from 'vue-i18n';
import en from '../locale/en.json';
import fr from '../locale/fr.json';
import chi from '../locale/chi.json';
import hi from '../locale/hi.json';


export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      fr,
      chi,
      hi
    }
  })

  vueApp.use(i18n)
})
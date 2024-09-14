import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const useSettingsStore = defineStore('settings', () => {

    const darkMode = ref(false)

    const { locale } = useI18n()

    const toggleDarkMode = () => {
        darkMode.value = !darkMode.value
    }

    const setLanguage = (lang) => {
        locale.value = lang
    }

    return {
        darkMode,
        toggleDarkMode,
        setLanguage
    }
})

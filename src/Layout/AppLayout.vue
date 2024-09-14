<script setup>
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '../stores/userSettingsStore'

const settingsStore = useSettingsStore()

const { locale } = useI18n()

const toggleDarkMode = () => {
  settingsStore.toggleDarkMode()
}

const changeLanguage = (lang) => {
  settingsStore.setLanguage(lang)
}
</script>
<template>
  <main :class="settingsStore.darkMode ? 'dark' : ''" class="w-full h-screen dark:bg-[#121212] bg-white z-100">
    <nav class="flex justify-between shadow-md space-x-4 p-2 w-full dark:bg-[#1d1d1d] bg-primary">
      <div class="cursor-pointer">
        <img v-tooltip="'Inicio'" src="../../public/img/gestora-la-avanzada.jpg" class="h-12"
          alt="gestora-la-avanzada-logo">
      </div>
      <div class="space-x-4 flex justify-center items-center">
        <router-link class="hover:border hover:border-b-white p-2 rounded-lg" to="/">{{ $t('home') }}</router-link>
        <router-link class="hover:border hover:border-b-white p-2 rounded-lg" to="/form">{{ $t('form') }}</router-link>
      </div>
      <div class="flex justify-center items-center space-x-4">
        <button v-tooltip="`${$t('switchLanguage')}`" @click="changeLanguage(locale === 'es' ? 'en' : 'es')"
          class="bg-white dark:bg-gray-600 text-black dark:text-white rounded-md">
          <div v-if="locale == 'es'" class="p-1 py-0">
            <img src="../../public/svg/united-states-svgrepo-com.svg" class="rounded-lg size-10">
          </div>
          <div v-else class="p-1 py-0">
            <img src="../../public/svg/flag-for-flag-spain-svgrepo-com.svg" class="rounded-lg size-10">
          </div>
        </button>
        <button v-tooltip.bottom="`${!settingsStore.darkMode ? 'Modo Oscuro' : 'Modo Claro'}`" @click="toggleDarkMode"
          class="p-2 bg-white dark:bg-gray-700 rounded-full focus:outline-none">
          <span v-if="settingsStore.darkMode">☀️</span>
          <span v-else>🌙</span>
        </button>
      </div>
    </nav>
    <slot />
    <router-view />
  </main>
</template>

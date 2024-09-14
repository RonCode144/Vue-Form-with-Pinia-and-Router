<script setup>
const { locale } = useI18n()
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Form from './components/Form.vue'
// import { useFormStore } from '@/stores/formStore'

// const formStore = useFormStore()
const darkMode = ref(false)

// The `toggleDarkMode` function is a function that toggles the value of the `darkMode` ref variable
// between `true` and `false`. Each time the function is called, it will invert the current value of
// `darkMode`. If `darkMode` is currently `false`, it will set it to `true`, and vice versa. This
// function is typically used to switch between dark mode and light mode in the user interface.
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
}

// The `toggleLanguage` function is responsible for toggling between two language locales, 'en'
// (English) and 'es' (Spanish). Here's a breakdown of what it does:
const toggleLanguage = () => {
  const newLocale = locale.value === 'es' ? 'en' : 'es'
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
}
</script>
<template>
  <main :class="darkMode ? 'dark' : ''" class="w-full h-screen dark:bg-[#121212] bg-white">
    <nav class="flex justify-between shadow-md space-x-4 p-2 w-full dark:bg-[#1d1d1d] bg-primary">
      <div>
        <img src="../public/img/gestora-la-avanzada.jpg" class="h-12" alt="gestora-la-avanzada-logo">
      </div>
      <div class="flex justify-center items-center space-x-4">
        <button @click="toggleLanguage" class="bg-white dark:bg-gray-600 text-black dark:text-white rounded-md">
          <div v-if="locale == 'es'" class="p-1 py-0">
            <img src="../public/svg/united-states-svgrepo-com.svg" class="rounded-lg size-10">
          </div>
          <div v-else class="p-1 py-0">
            <img src="../public/svg/flag-for-flag-spain-svgrepo-com.svg" class="rounded-lg size-10">
          </div>
        </button>
        <button @click="toggleDarkMode" class="p-2 bg-white dark:bg-gray-700 rounded-full focus:outline-none">
          <span v-if="darkMode">☀️</span>
          <span v-else>🌙</span>
        </button>
      </div>
    </nav>
    <div class="flex justify-start items-center w-full p-2">
      <h1 class="text-primary font-semibold text-xl">Datos de la Gestión</h1>
    </div>
    <section class="flex justify-center items-center mt-4">
      <Form />
    </section>
  </main>
</template>

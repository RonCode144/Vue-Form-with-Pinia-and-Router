<script setup>
const formStore = useFormStore()
import { ref } from 'vue'
import { useFormStore } from '../stores/formStore'
import CustomInput from '../components/CustomInput.vue'

const showThings = ref(false)

const business = ref([
  { id: 1, code: 198768, name: 'FIP NPL-PRESTOF1' },
  { id: 2, code: 198768, name: 'FIP NPL-PRESTOF2' },
  { id: 3, code: 198768, name: 'FIP NPL-PRESTOF3' },
])

const users = ref([
  { id: 1, code: 6666, name: 'ADMINISTRADOR' },
  { id: 2, code: 1234, name: 'GESTOR' },
  { id: 3, code: 5678, name: 'CLIENTE' },
])

const managmentOptions = [
  { id: 1, name: 'COMP. DE PAGO DE ABONO' },
  { id: 2, name: 'COBRANZA PREVENTIVA' },
  { id: 3, name: 'COBRANZA ADMINISTRATIVA' },
  { id: 4, name: 'COBRANZA JUDICIAL' },
  { id: 5, name: 'COBRANZA EXTRAJUDICIAL' },
]

const typeOptions = [
  { id: 1, name: 'CONTACTO DIRECTO' },
  { id: 2, name: 'ENVÍO DE CORREO ELECTRÓNICO' },
  { id: 3, name: 'NEGOCIACIÓN DE ACUERDOS' },
  { id: 4, name: 'REPORTE A BURÓS DE CRÉDITO' },
  { id: 5, name: 'VISITAS DOMICILIARIAS' },
]

const buttons = [
  { id: 1, name: 'BV', severity: 'info' },
  { id: 2, name: 'NC', severity: 'warning' },
  { id: 3, name: 'ROD', severity: 'success' },
]
</script>
<template>
  <div class="flex justify-center items-center p-4">
    <h1 class="text-3xl dark:text-white text-primary font-bold">
      {{ $t('managmentIncome') }}
      <!-- {{ formStore }} -->
    </h1>
  </div>
  <main class="flex justify-center items-center">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 w-[70vw] border border-slate-300 shadow-md rounded-lg p-4">
      <!-- Primera columna -->
      <div class="space-y-4">
        <CustomInput type="number" v-model:input="formStore.businessCode" class="text-gray-800 dark:text-white"
          :placeholder="`${$t('businessPlaceholder')}`" :label="`${$t('business')}`" />
        <span v-if="showThings" class="text-primary dark:text-emerald-300 text-xs italic font-semibold uppercase">
          {{ business[0].name }}
        </span>
        <CustomInput type="datetime" v-model:input="formStore.date" class="text-gray-800 dark:text-white"
          placeholder="dd/mm/yyyy" :label="`${$t('date')}`" />
        <CustomInput v-model:input="formStore.address" class="text-gray-800 dark:text-white"
          placeholder="e.g. Manzanillo del Mar Manzana 0 Lote 0" :label="`${$t('address')}`" />
        <CustomInput type="dropdown" v-model:input="formStore.managment" class="text-gray-800 dark:text-white"
          :options="managmentOptions" optionLabel="name" :label="`${$t('managment')}`"
          :placeholder="`${$t('managmentPlaceholder')}`" />
        <div class="flex justify-center space-x-2">
          <div v-for="(item, index) in buttons" :key="item.id" class="md:flex md:col-span-1">
            <Button @click="showThings = true" :label="`${item.name}`" :severity="`${item.severity}`" size="small"
              :pt="{
                label: '!italic !bold'
              }" />
          </div>
        </div>
      </div>

      <!-- Segunda columna -->
      <div class="space-y-4">
        <CustomInput type="number" v-model:input="formStore.user" class="text-gray-800 dark:text-white"
          :placeholder="`${$t('userPlaceholder')}`" :label="`${$t('user')}`" />
        <span v-if="showThings" class="text-primary dark:text-emerald-300 text-xs italic font-semibold uppercase">
          {{ users[1].name }}
        </span>
        <CustomInput type="number" v-model:input="formStore.phone" class="text-gray-800 dark:text-white"
          placeholder="e.g. 320320320" :label="`${$t('phone')}`" />
        <CustomInput type="dropdown" v-model:input="formStore.type" class="text-gray-800 dark:text-white"
          :options="typeOptions" optionLabel="name" :label="`${$t('type')}`"
          :placeholder="`${$t('typePlaceholder')}`" />
        <div class="flex space-x-2">
          <CustomInput type="number" v-model:input="formStore.amount" class="text-gray-800 dark:text-white"
            placeholder="$20,000" :label="`${$t('amount')}`" />
          <CustomInput type="date" v-model:input="formStore.paymentDate" class="text-gray-800 dark:text-white"
            placeholder="dd/mm/yyyy" :label="`${$t('paymentDate')}`" />
        </div>
        <div class="">
          <CustomInput type="textarea" v-model:input="formStore.commentary" class="text-gray-800 dark:text-white"
            :label="`${$t('commentary')}`" :placeholder="`${$t('commentaryPlaceholder')}`" />
        </div>
      </div>

      <div class="col-span-1 md:col-span-2 flex justify-end space-x-2">
        <Button @click="formStore.submitForm" :label="`${$t('save')}`" :loading="formStore.loading" severity="success" icon="fa-solid fa-save" />
        <Button @click="alert()" :label="`${$t('close')}`" severity="danger" icon="fa-solid fa-circle-xmark" />
      </div>
    </section>
  </main>
</template>

<script setup>
import CustomInput from '../components/CustomInput.vue'
</script>
<template>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-slate-200 w-full m-4 rounded-lg shadow-md">
    <!-- Primera columna -->
    <div class="space-y-4">
      <CustomInput class="text-gray-800" placeholder="Escriba Nombre" label="Negocio" />
      <CustomInput class="text-gray-800" placeholder="Escriba Nombre" label="Usuario" />
      <CustomInput class="text-gray-800" placeholder="Escriba Nombre" label="Fecha" />
      <CustomInput class="text-gray-800" placeholder="Escriba Nombre" label="Teléfono" />
      <CustomInput class="text-gray-800" placeholder="Escriba Nombre" label="Dirección" />
    </div>

    <!-- Segunda columna -->
    <div class="space-y-4">
      <CustomInput class="text-gray-800" placeholder="Escriba Nombre" label="Tipo" />
      <CustomInput class="text-gray-800" placeholder="Escriba Nombre" label="Gestión" />
      <CustomInput class="text-gray-800" placeholder="Escriba Nombre" label="Compromiso Monto" />
      <CustomInput class="text-gray-800" placeholder="Escriba Nombre" label="Para Cuando" />
      <CustomInput class="text-gray-800" placeholder="Escriba Nombre" label="Comentario" />
    </div>

    <!-- Botones -->
    <div class="col-span-1 md:col-span-2 flex justify-end space-x-2">
      <Button label="Aceptar" severity="success" />
      <Button label="Salir" severity="danger" />
    </div>
  </section>
</template>

// const toast = useToast()
import { defineStore } from 'pinia'
import { ref } from 'vue'
// import { useToast } from "primevue/usetoast"

export const useFormStore = defineStore('formStore', () => {
    const businessCode = ref('')
    const userCode = ref('')
    const date = ref('')
    const phoneNumber = ref('')
    const address = ref('')
    const type = ref('')
    const managment = ref('')
    const amount = ref('')
    const paymentDate = ref('')
    const commentary = ref('')
    const loading = ref(false)
    const error = ref(null)
    const success = ref(null)


    /**
     * The `submitForm` function is an asynchronous function that simulates sending form data to a
     * backend API using fetch, handling loading, success, and error states accordingly.
     */
    const submitForm = async () => {
        loading.value = true
        error.value = null
        success.value = null

        const formData = {
            businessCode: businessCode.value,
            userCode: userCode.value,
            date: date.value,
            phoneNumber: phoneNumber.value,
            address: address.value,
            type: type.value,
            managment: managment.value,
            amount: amount.value,
            paymentDate: paymentDate.value,
            commentary: commentary.value
        };

        //Simulate a sending data to back using fetch
        try {
            setTimeout(() => {
                loading.value = false
            }, "3000")

            const response = await fetch('/api/form-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            // toast.add({ severity: 'info', summary: 'Info', detail: formData, life: 3000 });
            success.value = 'Formulario enviado correctamente.';
            console.log(data);
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    return {
        businessCode,
        userCode,
        date,
        phoneNumber,
        address,
        type,
        managment,
        amount,
        paymentDate,
        commentary,
        loading,
        error,
        success,
        submitForm,
    };
});

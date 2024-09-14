import './app.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './Layout/AppLayout.vue'
import Aura from '@primevue/themes/aura';
import BadgeDirective from 'primevue/badgedirective';
import Button from "primevue/button"
import ConfirmationService from "primevue/confirmationservice";
import i18n from './i18n';
import PrimeVue from 'primevue/config';
import Ripple from 'primevue/ripple';
import router from './routes';
import ToastService from 'primevue/toastservice';
import Tooltip from "primevue/tooltip";

const pinia = createPinia()
const app = createApp(App)

const optionsPrimeVUE = {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Limpiar",
    apply: "Aplicar",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Si",
    reject: "No",
    choose: "Elegir",
    upload: "Subir",
    cancel: "Cancelar",
    completed: "Completado",
    pending: "Pendiente",
    dayNames: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sabado",
    ],
    dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    dayNamesMin: ["Do", "Lu", "Ma", "Mie", "Ju", "Vi", "Sa"],
    monthNames: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ],
    monthNamesShort: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
    ],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Hoy",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    dateFormat: "mm/dd/yy",
    weak: "Débil",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No se encontraron resultados.", // @deprecated Use 'emptySearchMessage' option instead.
    searchMessage: "{0} resultados disponibles.",
    selectionMessage: "{0} items seleccionados",
    emptySelectionMessage: "No se ha seleccionado ningún item",
    emptySearchMessage: "No se encontraron resultados.",
    emptyMessage: "No hay opciones disponibles",
    aria: {
        trueLabel: "True",
        falseLabel: "False",
        nullLabel: "Not Selected",
        star: "1 star",
        stars: "{star} stars",
        selectAll: "All items selected",
        unselectAll: "All items unselected",
        close: "Close",
        previous: "Previous",
        next: "Next",
        navigation: "Navigation",
        scrollTop: "Scroll Top",
        moveTop: "Move Top",
        moveUp: "Move Up",
        moveDown: "Move Down",
        moveBottom: "Move Bottom",
        moveToTarget: "Move to Target",
        moveToSource: "Move to Source",
        moveAllToTarget: "Move All to Target",
        moveAllToSource: "Move All to Source",
        pageLabel: "{page}",
        firstPageLabel: "First Page",
        lastPageLabel: "Last Page",
        nextPageLabel: "Next Page",
        prevPageLabel: "Previous Page",
        rowsPerPageLabel: "Rows per page",
        jumpToPageDropdownLabel: "Jump to Page Dropdown",
        jumpToPageInputLabel: "Jump to Page Input",
        selectRow: "Row Selected",
        unselectRow: "Row Unselected",
        expandRow: "Row Expanded",
        collapseRow: "Row Collapsed",
        showFilterMenu: "Show Filter Menu",
        hideFilterMenu: "Hide Filter Menu",
        filterOperator: "Filter Operator",
        filterConstraint: "Filter Constraint",
        editRow: "Row Edit",
        saveEdit: "Save Edit",
        cancelEdit: "Cancel Edit",
        listView: "List View",
        gridView: "Grid View",
        slide: "Slide",
        slideNumber: "{slideNumber}",
        zoomImage: "Zoom Image",
        zoomIn: "Zoom In",
        zoomOut: "Zoom Out",
        rotateRight: "Rotate Right",
        rotateLeft: "Rotate Left",
    },
};

app.use(ToastService)
app.use(i18n)
app.use(router)
app.use(pinia)
app.use(PrimeVue, {
    locale: optionsPrimeVUE,
    theme: {
        preset: Aura
    },
    ripple: true,
    pt: {
        button: {
            root: '!h-8 !text-white'
        },
        inputtext: {
            root: '!h-8 !bg-white !text-black'
        },
        textarea: {
            root: '!h-8 !bg-white !text-black'
        },
        select: {
            root: '!h-8 !bg-white !text-black',
            label: '!h-8 !bg-white !text-black',
            input: '!py-0 !flex !items-center !text-sm !font-normal',
            pcFilterContainer: '!bg-white !text-black',
            item: '!py-1 !px-3 !text-sm !font-normal',
            filterInput: '!h-8'
        },
        multiselect: {
            root: '!h-8',
            label: '!py-0.5 !flex !h-full !items-center !text-sm !font-normal',
            token: '!py-0 !px-1',
            tokenLabel: '!text-sm',
            item: '!py-1 !px-3 !text-sm !font-normal',
            filterInput: '!h-8',
            header: '!h-min !py-0.5'
        }
    },
    zIndex: {        //overlay menus
        tooltip: 1100       //tooltip
    }
})
    .component('Button', Button)
    .directive("tooltip", Tooltip)
    .directive("badge", BadgeDirective)
    .directive('ripple', Ripple)
app.mount('#app')

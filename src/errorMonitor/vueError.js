
import Vue from 'vue';
import ErrorStackParser from 'error-stack-parser';

export function vueErrorCatch() {

    const handler = (err, vm, info) => {
        const handledState = { 
            severity: 'error', 
            unhandled: true, 
            severityReason: { type: 'unhandledException' }
        }
        const report = {
            name: err.name, 
            mes: err.message,
            errorMes: new Error(err.message || err.errorMessage),
            // sa: client.BugsnagReport.getStacktrace(err),
            handledState,
            err,
            errorInfo: info,
            component: vm ? formatComponentName(vm, true) : undefined,
            props: vm ? vm.$options.propsData : undefined
        };

        let list = ErrorStackParser.parse(new Error(err.message || err.errorMessage))

        console.log(list, 'report: ', report);
    }

    Vue.config.errorHandler = handler;
}


// taken and reworked from Vue.js source
const formatComponentName = (vm, includeFile) => {
if (vm.$root === vm) return '<Root>'
const options = typeof vm === 'function' && vm.cid != null
    ? vm.options
    : vm._isVue
    ? vm.$options || vm.constructor.options
    : vm || {}
let name = options.name || options._componentTag
const file = options.__file
if (!name && file) {
    const match = file.match(/([^/\\]+)\.vue$/)
    name = match && match[1]
}

return (
    (name ? ('<' + (classify(name)) + '>') : '<Anonymous>') +
    (file && includeFile !== false ? (' at ' + file) : '')
)
}

// taken and reworked from Vue.js source
const classify = str =>
str.replace(/(?:^|[-_])(\w)/g, c => c.toUpperCase()).replace(/[-_]/g, '')

// module.exports = {
//     name: 'vue',
//     init: (client, Vue = window.Vue) => {
//         if (!Vue) throw new Error('cannot find Vue')
//         // 思考为什么这样做
//         const prev = Vue.config.errorHandler
//         const handler = (err, vm, info) => {
//             const handledState = { 
//                 severity: 'error', 
//                 unhandled: true, 
//                 severityReason: { type: 'unhandledException' }
//             }
//             const report = new client.BugsnagReport(
//                 err.name, 
//                 err.message,
//                 client.BugsnagReport.getStacktrace(err),
//                 handledState,
//                 err
//             );
//             report.updateMetaData('vue', {
//                 errorInfo: info,
//                 component: vm ? formatComponentName(vm, true) : undefined,
//                 props: vm ? vm.$options.propsData : undefined
//             })
//             client.notify(report)
//             if (typeof console !== 'undefined' && typeof console.error === 'function') console.error(err)
//             if (typeof prev === 'function') prev.call(this, err, vm, info)
//         }
//         // 思考为什么这样做
//         Vue.config.errorHandler = handler
//         return null
//     }
// }
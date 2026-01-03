import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
    app.component('default', defineAsyncComponent(() => import("../layouts/default.vue")))
    app.component('dangnhap', defineAsyncComponent(() => import("../layouts/dangnhap.vue")))
    app.component('learn', defineAsyncComponent(() => import("../layouts/learn.vue")))
    app.component('competision', defineAsyncComponent(() => import("../layouts/competision.vue")))
    app.component('content-learn', defineAsyncComponent(() => import("../pages/Learn/Learn.vue")))
}
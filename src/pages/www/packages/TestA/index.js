import { createApp } from "vue"
import {TestA} from "./views"

function initPkg_TestA() {
    createApp(TestA).mount("#u1");
}

export {
    initPkg_TestA
}
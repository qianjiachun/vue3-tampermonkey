import { createApp } from "vue"
import {TestA} from "./views"

function init() {
    createApp(TestA).mount("#u1");
}

export default {
    init
}
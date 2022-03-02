import { createApp } from "vue"
import { TestA } from "./views"
import "./styles/index.css"

function init() {
    createApp(TestA).mount("#u1");
}

export default {
    init
}
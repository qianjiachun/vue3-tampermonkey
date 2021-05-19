import {initPkg} from "./packages"

function beforeInit() {

}

function init() {
    beforeInit();
    initPkg();
}

export default {
    init
}
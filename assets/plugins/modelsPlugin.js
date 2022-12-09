import {RouteName} from "@/router/RouteName.js";

export default {
    install(app, options) {
        app.config.globalProperties.$routes = RouteName;
    }
}

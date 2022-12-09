import modelsPlugin from './modelsPlugin.js';
import utilsPlugin from "plugins/utilsPlugin.js";

export default {
    install(app, options) {
        app.use(modelsPlugin)
        app.use(utilsPlugin)
    }
}

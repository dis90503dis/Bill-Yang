import { createApp } from "vue"
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { install as RecaptchaPlugin } from "vue3-recaptcha-v2"
import "vue-toastification/dist/index.css"
import AOS from "aos"
import "aos/dist/aos.css"
import App from "./App.vue"

AOS.init()
createApp(App).use(RecaptchaPlugin, { sitekey: "YOUR_SITE_KEY" }).mount("#app")

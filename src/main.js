import { createApp } from "vue"
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { install as recaptchaInstall } from "vue3-recaptcha-v2"
import "vue-toastification/dist/index.css"
import AOS from "aos"
import "aos/dist/aos.css"
import App from "./App.vue"
import "vue-toastification/dist/index.css"
import Toast from "vue-toastification"

AOS.init()
const app = createApp(App)
const smoothScroll = (selector) => {
  const el = document.querySelector(selector)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth" })
}
app.provide("smoothScroll", smoothScroll)
createApp(App)
  .use(recaptchaInstall, { sitekey: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz" })
  .use(Toast, {
    timeout: 3000,
  })
  .mount("#app")

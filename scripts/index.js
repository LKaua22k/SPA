import { Routers } from "./router.js"

const routers = new Routers()

routers.add('/', './pages/home.html')
routers.add('/about', './pages/about.html')
routers.add('/contact', './pages/contact.html')
routers.add('/404', './pages/404.html')


routers.handle()

window.onpopstate = () => routers.handle()
window.route = () => routers.route()
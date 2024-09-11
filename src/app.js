import './app.css'
import nav from './modules/ui/nav'
import main from './modules/ui/main'
import aside from './modules/ui/aside'

const app = document.getElementById('app');
app.appendChild(nav);
app.appendChild(main);
app.appendChild(aside);
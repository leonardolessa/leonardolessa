import './style.scss'
import ScrollBehavior from './js/ScrollBehavior';
import EmailDecrypt from './js/EmailDecrypt';



document.addEventListener('DOMContentLoaded', () => {
  ScrollBehavior.init();
  EmailDecrypt.init();
});
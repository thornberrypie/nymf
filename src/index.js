import { Header } from './app/header';
import './styles/scss/main.scss';
import nymLogo from './assets/images/nym-logo.jpg';

let header = new Header();
let firstHeading = header.getFirstHeading();

console.log(firstHeading);

document.getElementById('nym-logo').setAttribute('src', nymLogo);

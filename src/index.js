import 'bootstrap';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './main.scss';
var reqScripts = require.context("./scripts", true, /^(.*\.(js$))[^.]*$/i);
reqScripts.keys().forEach(reqScripts);

// projects icons
import navIconSrc from './icons/nav-bar/site-logo.png';
import featureIconSrc1 from './icons/features/play-img.png';
import featureIconSrc2 from './icons/features/slider-img.png';
import featureIconSrc3 from './icons/features/form-img.png';
import resourcesIconSrc1 from './icons/resources/html-img.png';
import resourcesIconSrc2 from './icons/resources/bootstrap-img.png';
import resourcesIconSrc3 from './icons/resources/css-img.png';
// projects imgs
import clientsImgSrc1 from './img/clients/clients-img1.jpg';
import clientsImgSrc2  from './img/clients/clients-img2.jpg';

// #navbar
const navIcon = document.getElementById('logo-site');
navIcon.src = navIconSrc;
// #features
const featureIcon1 = document.getElementById('featureIcon1');
featureIcon1.src = featureIconSrc1 ;
const featureIcon2 = document.getElementById('featureIcon2');
featureIcon2.src = featureIconSrc2;
const featureIcon3 = document.getElementById('featureIcon3');
featureIcon3.src = featureIconSrc3;
// #resources
const resourcesIcon1 = document.getElementById('resourcesIcon1');
resourcesIcon1.src = resourcesIconSrc1;
const resourcesIcon2 = document.getElementById('resourcesIcon2');
resourcesIcon2.src = resourcesIconSrc2;
const resourcesIcon3 = document.getElementById('resourcesIcon3');
resourcesIcon3.src = resourcesIconSrc3;
// #clients
const clientsImg1 = document.getElementById('clientsImg1');
clientsImg1.src = clientsImgSrc1;
const clientsImg2 = document.getElementById('clientsImg2');
clientsImg2.src = clientsImgSrc2;




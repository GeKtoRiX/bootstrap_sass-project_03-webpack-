import 'bootstrap';
// import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './main.scss';
var reqScripts = require.context("./scripts", true, /^(.*\.(js$))[^.]*$/i);
reqScripts.keys().forEach(reqScripts);

// projects icons
import navIconSrc from './icons/site-logo.png';
// projects imgs

// #nav-icon
const navIcon = document.getElementById('logo-site');
navIcon.src = navIconSrc;



import angular from 'angular';
import {home} from './components/home';
import {DataService} from './services/data.service';

export default angular.module('app', [])
  .component('home', home)
  .service('DataService', DataService);

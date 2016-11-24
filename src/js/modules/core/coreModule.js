import config from './config/config'
import homeModule from './../home/homeModule'

var coreModule = angular.module('expertView', ['ui.router', 'ngMaterial', homeModule.name]);

config(coreModule);
module.exports = coreModule;
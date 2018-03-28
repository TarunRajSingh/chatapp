'use strict';

angular.module('chatApp.auth', ['chatApp.constants', 'chatApp.util', 'ngCookies', 'ngRoute'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

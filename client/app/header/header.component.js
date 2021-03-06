(function () {
    'use strict';

    angular
        .module('Header')
        .component('musicHeader', {
            controller: headerCtrl,
            bindings: {},
            templateUrl: '/public/app/header/header.html'
        });


    headerCtrl.$inject = ['$scope', 'loginUtils'];

    function headerCtrl($scope, loginUtils) {
        var self = this;

        this.isLogged = function isLogged() {
            return loginUtils.isLogged();
        };

        this.login = function login() {
            location.href = '/login';
        };

        this.home = function home() {
            location.href = '/';
        };

        this.profile = function home() {
            location.href = '/me';
        };

        this.signUp = function signUp() {
            location.href = '/signup';
        };

        this.tracks = function tracks() {
            location.href = '/canciones';
        };

        this.artists = function artists() {
            location.href = '/artistas';
        };

        this.albums = function albums() {
            location.href = '/album';
        };

        this.logout = function logout() {
            loginUtils.logout();
            location.reload();
        };

        this.getFirstName = function getFirstName () {
            return loginUtils.getFirstName();
        };
    }

} ());

export default function (module) {
    module.config(function ($stateProvider) {
        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: '/src/js/modules/home/pages/home.html'
            })
    })
};
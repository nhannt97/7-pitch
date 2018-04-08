(function () {
    angular
        .module('pitch7App')
        .service('pitchApiService', Controller);
    function Controller($http) {
        let locationByCoords = function(lat, lng) {
            return $http({
                url: '/api/pitch/listByDistance/' + lng + '/' + lat + '/' + 10,
                method: 'GET',
            });
        }
        let locationList = function() {
            return $http({
                url: '/api/pitch/list',
                method: 'GET'
            });
        }
        let filter;
        let getPitch = function(pitchid) {
            return $http({
                url: '/api/pitch/' + pitchid,
                method: 'GET'
            });
        }
        let rentPitch = function(rentInfo) {
            return $http({
                url: '/api/pitch/' + rentInfo.pitchid + '/rent',
                method: 'POST',
                json: true,
                data: rentInfo
            });
        }
        return {
            locationByCoords: locationByCoords,
            locationList: locationList,
            getPitch: getPitch,
            filter: filter,
            rentPitch: rentPitch
        }
    }
})();
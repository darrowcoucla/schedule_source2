(function () {
    'use strict';
    
    angular
        .module('myApp', [
           // Your dependencies 
        ])
        .controller('myController', myController);
        
    
    function myController(FormSubmitter) {
        var vm = this;

        vm.redirectMe = function() {
            var url = 'https://webservices.library.ucla.edu/rcres/reservation/reserveroom/207';
            var method = 'POST';
            var params = {
description: 'RC-Res',
start: '2016-04-25 08:30 AM',
end: '2016-04-25 09:00 AM',
pending: true,
numberOfAttendees: 2,
email: 'darrowco@library.ucla.edu',
phone: '310-206-9780',
firstName: 'Darrow',
lastName: 'Cole',
academicDept: 'Other',
academicDeptOther: 'Education',
division: 'Staff',
courseLevel: 'Meeting',
srs: '111222333',
computerUse: 'No',
internalNotes: 'Testing web service, I will delete',
uid: '502673598'
            };



            FormSubmitter.submit(url, method, params);
        }
    }
})();

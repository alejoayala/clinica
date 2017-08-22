"use strict";
(function () {
    angular.module('blankonApp.agenda', ['daypilot', 'ui.bootstrap'])
            .controller('CalendarCtrl', CalendarCtrl)
            .controller('modalAgendaInstanceCtrl', modalAgendaInstanceCtrl);

    CalendarCtrl.$inject = ['$scope','settings','$uibModal'];
    function CalendarCtrl($scope,settings,$uibModal) {

        var vm = this;
        var date = new Date();

        $scope.fData={};

        vm.config = {
            headerDateFormat : "dd/MM/yyyy",
            startDate: date.toISOString(),
            viewType: "Week",
            //showEventStartEnd : true ,
            dayBeginsHour : 7 , //-- HORA DE INICIO
            dayEndsHour : 19 , // -- HORA FINAL
            eventDeleteHandling : "Update"
            //timeHeaderCellDuration : 15 ,
            //cellDuration : 15 ,
            //hourWidth : 100 ,
            //cellHeight : 30
            
        };


        vm.config2 = {
            showMonths : 2,
            skipMonths : 2,
            selectMode : "week",
            locale: "es-es",

            onTimeRangeSelected: function(args) {
                $scope.dp.startDate = args.start;
                $scope.dp.update();
            },
            onBeforeCellRender: function(args) {
                if (args.cell.isCurrentMonth) {
                    args.cell.cssClass = "current-month";
                }
            }

        }

        vm.events = [
            {
                start: new DayPilot.Date("2016-08-25T10:00:00"),
                end: new DayPilot.Date("2016-08-25T10:30:00"),
                id: DayPilot.guid(),
                text: "Dr. Sanchez"
                
            }
        ];

        $scope.addAge = function(data) {
            vm.events.push(
                {
                    
                    start: new DayPilot.Date(data.start),
                    end: new DayPilot.Date(data.start).addMinutes(data.duracion),
                    id: DayPilot.guid(),
                    text: data.text

                }
            );
            
        };
        
        vm.move = function() {
            var event = vm.events[0];
            event.start = event.start.addDays(1);
            event.end = event.end.addDays(1);
        };

        vm.rename = function() {
            vm.events[0].text = "New name";
        };

        vm.message = function() {
            vm.calendar.message("Hi");
        };

        vm.day = function() {
            vm.config.viewType = "Day";
        };

        vm.week = function() {
            vm.config.viewType = "Week";
            vm.calendar.update();
        };


        vm.openModal = function (accion, data) {

            var modalInstance = $uibModal.open({
                templateUrl: settings.baseURLCI +'/agenda/ver_formulario_agenda',
                controller: 'modalAgendaInstanceCtrl',
                windowClass: 'modal-primary',
                size: 'md',
                scope : $scope
 
            });


        };

    }


    modalAgendaInstanceCtrl.$inject = ['$rootScope', '$scope', '$uibModalInstance','$filter'];
    function modalAgendaInstanceCtrl($rootScope, $scope, $uibModalInstance,$filter) {

        $scope.turnodoc = [
            { valor : "07:00"},
            { valor : "07:15"},
            { valor : "07:30"},
            { valor : "07:45"},
            { valor : "08:00"},
            { valor : "08:15"},
            { valor : "08:30"},
            { valor : "08:45"},
            { valor : "09:00"},
            { valor : "09:15"},
            { valor : "09:30"},
            { valor : "09:45"},
            { valor : "10:00"},
            { valor : "10:15"},
            { valor : "10:30"},
            { valor : "10:45"},
            { valor : "11:00"},
            { valor : "11:15"},
            { valor : "11:30"},
            { valor : "11:45"}
        ];

        $scope.durac = [
            { valor : "15" , name: "15 min"},
            { valor : "30" , name: "30 min"},            
            { valor : "45" , name: "45 min"},
            { valor : "60" , name: "1 hora"},            
            { valor : "120" , name: "2 horas"},            
            { valor : "240" , name: "4 horas"}
        ];

        $scope.save = function () {
            
        };

        $scope.add = function() {

            var fec = $filter('date')(new Date($scope.dt), 'yyyy-MM-dd');
            var horaini = $scope.fData.hora+":00";
            
            var duracion = $scope.fData.duracion;
            var data = {
                start : fec+"T"+horaini,
                duracion : duracion,
                text : $scope.fData.odontologo
            }
            console.log(data);
            $scope.addAge(data);
            $uibModalInstance.dismiss('cancel');
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        //========= FUNCIONES DEL CALENDARIO ==========//

        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.showWeeks = false;
        $scope.toggleWeeks = function () {
           $scope.showWeeks = ! $scope.showWeeks;
        };

        $scope.clear = function () {
           $scope.dt = null;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
           return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        $scope.toggleMin = function() {
           $scope.minDate = ( $scope.minDate ) ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function() {
            $timeout(function() {
              $scope.opened = true;
            });
        };

        $scope.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 1
        };
        //========= FIN DE FUNCIONES DEL CALENDARIO ==========//


    }



})();
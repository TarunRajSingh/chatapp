'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];
      this.ClearAll = document.getElementById('ClearAll');
      this.UserName = '';
      this.UserMessage = '';
      this.Send = document.getElementById('Send');
      this.ViewMessages = [];
      console.log(ClearAll);
      console.log(UserName);
      console.log(UserMessage);
      console.log(Send);

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });

    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });
    }

    // filter(){
    //   console.log("called filter");
    // }

    addThing() {
      // filter();
      document.getElementById("UserName").disabled = true;
      if (this.UserMessage=="") {
        alert("Message is empty");
      }
      else{
        var d = new Date();
        {
          this.$http.post('/api/things', {
            message: this.UserMessage,
            date: d,
            from: this.UserName,
            to: "new"
          });
        }
      }
      this.UserMessage = '';
    }

    deleteThing() {
      document.getElementById("UserName").disabled = false;
      this.UserName = '';
      for (var i = 0; i < this.awesomeThings.length; i++) {
        this.$http.delete('/api/things/' + this.awesomeThings[i]._id);
      }
    }
  }

  angular.module('chatApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();

// app.controller('myCtrl',[ function() {
app.controller('myCtrl', ["itemsServices", function (itemsServices) {

    var vm = this;
    // vm.currentItem = {};

    function init() {
        debugger
        vm.items = itemsServices.getItems();
    };

    vm.addItems = function (name) {
        itemsServices.addItems(name);
        vm.itemName=""
    };


    vm.deleteItems = function (id) {
        itemsServices.deleteItems(id);
    };
    vm.CommentsItems = function (item) {
        vm.currentItem = item;
    }
    ;
    vm.addComments = function (comment) {
        itemsServices.addComent(comment, vm.currentItem);
        vm.comment = "";
    };

    init();

}]);



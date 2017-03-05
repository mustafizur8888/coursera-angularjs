angular.module("customeService", [])
    .controller("shoppingItemsAddController", shoppingItemsAddController)
    .controller("shoppingItemsShowingController", shoppingItemsShowingController)
    .service("ShoppingService", ShoppingService);

function shoppingItemsAddController($scope, ShoppingService) {
    var shopping = this;
    shopping.itemName = "";
    shopping.itemQty = "";
    shopping.AddItem = function () {
        ShoppingService.AddItem(shopping.itemName, shopping.itemQty)
    }


}

function shoppingItemsShowingController($scope, ShoppingService) {
    var shopping = this;
    shopping.items = ShoppingService.getItems();
    shopping.removeItem = function (itemIndex) {

        ShoppingService.RemoveItem(itemIndex);
    }
}

function ShoppingService() {
    var service = this;
    var items = [];

    service.AddItem = function (itemName, itemQty) {
        items.push({
            itemName,
            itemQty
        });

    }
    service.RemoveItem = function (itemIndex) {
        items.splice(itemIndex, 1);
    }

    service.getItems = function () {
        return items;
    }
}
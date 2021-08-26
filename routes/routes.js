module.exports = function (app) {

    var controllers = require('../controllers/controller');

    app.route('/orders')
        .post(controllers.createNewOrder)
        .get(controllers.fetchAllOrders)
        .put(controllers.updateOrder)
        .delete(controllers.deleteOrder)


    app.route('/users')
        .post(controllers.createNewUser)
        .get(controllers.fetchAllUsers)
        .put(controllers.updateUser)
        .delete(controllers.deleteUser)


    app.route('/meals')
        .post(controllers.createNewMeal)
        .get(controllers.fetchAllMeals)
        .put(controllers.updateMeal)
        .delete(controllers.deleteMeal)

}
// Some helper functions for the codelab.

function showRestaurantsAround() {
  var restaurants = [
    { name: 'Pudding Lane', price: '0', city: 'Kisii' },
    { name: 'Cask', price: '10-20', city: 'London' },
    { name: 'Duke of Wellington', price: '10-15', city: 'London' },
  ];

  showRestaurants(restaurants);
}

function showTopRestaurants() {
  var restaurants = [
    { name: 'Tasty Sushi', price: '15-25', city: 'Cardiff' },
    { name: 'Warm Pizza', price: '10-15', city: 'Glasgow' },
    { name: 'Chez Francois', price: '50-100', city: 'Belfast' },
  ];

  showRestaurants(restaurants);
}

function showRestaurants(restaurants) {
  var restaurantList = document.getElementById('restaurant-list');
  restaurantList.innerHTML = '';

  restaurants.forEach(function(r) {
    var restaurant = document.createElement('local-restaurant');
    restaurant.name = r.name;
    restaurant.price = r.price;
    restaurant.city = r.city;
    restaurantList.appendChild(restaurant);
  });
}

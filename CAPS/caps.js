'use strict';

function vendorDelivered (payload){
  console.log(
    `Vendor: Thanks on your hard work ! i recived my order ${payload.orderID}`,
  );
}

function driverPickup(payload) {
  console.log(`Driver pick up the order ${payload.orderId}`);
}

function  driverDelivered(payload) {
  console.log(`order deliverd ${payload.orderId}`);
  
}

const pickupOrder = (payload) => {
  console.log('EVENT pickup');
  console.log('Time:', payload.time);
  console.log('Store:', payload.store);
  console.log('OrderID:', payload.orderId);
  console.log('Customer:', payload.customer);
  console.log('Address:', payload.address);
};

const inTransitOrder = (payload) => {
  console.log(`EVENT in-transit ${payload.orderId}`);
};

function deliveredOrder(payload) {
  console.log(`Delivered order ${payload.orderId}`);
}

module.exports = {
  vendorDelivered,
  driverPickup,
  driverDelivered,
  pickupOrder,
  inTransitOrder,
  deliveredOrder,
};
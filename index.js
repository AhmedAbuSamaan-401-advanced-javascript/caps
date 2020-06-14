'use strict';
const events = require('./CAPS/events.js');
const pickup = require('./CAPS/caps.js').pickupOrder ;
const inTransit = require('./CAPS/caps.js').inTransitOrder ;
const delivered = require('./CAPS/caps.js').deliveredOrder ;


events.on('pickup',pickup);

require('./CAPS/driver.js');
require('./CAPS/vendor.js');

events.on('in-transit', inTransit);
events.on('delivered', delivered);
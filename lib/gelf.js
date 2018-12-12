var logger = require('gelf-pro');

module.exports.send = function(msg, params = {}, callback) {
    logger.setConfig({
	  fields: {facility: "CI", stage: "clone"},
	  filter: [],
	  transform: [],
	  broadcast: [],
	  levels: {},
	  aliases: {},
	  adapterName: 'udp',
	  adapterOptions: {
	    host: params.host,
	    port: params.port,
	    family: 4,
	    timeout: 10000,
	    protocol: 'udp4',
	  }
	});

    if (msg.length) {
    	let level = params.hasOwnProperty('level') ? params.level : "error";
    	switch (level) {
    		case 'emergency': 		// 0
    		case 'alert': 			// 1
    		case 'critical': 		// 2
    		case 'error': 			// 3
    		case 'warning': 		// 4
    		case 'notice': 			// 5
    		case 'info': 			// 6
    		case 'debug': 			// 7
    			logger[level](msg);
    			break;
    		default:
    			logger.error(msg);
    	}
    	callback();
    }
};
var moment = require('moment');
pm.environment.set('date', moment().format("YYYY-MM-DD hh:mm:ss")); //set today date

pm.environment.set('yesterday', moment().subtract(1, 'days').format("YYYY-MM-DD hh:mm:ss")); //set yesterday

pm.environment.set('tomorrow', moment().add(1, 'days').format("YYYY-MM-DD hh:mm:ss")); //set tomorrow

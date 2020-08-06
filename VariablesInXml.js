/*you can't directly use var in xml in request body
so you need to build your whole document first and set it in an env variable*/

const dateNow = new Date();
pm.environment.set('currentDate', dateNow.toISOString());
pm.environment.set('code', _.random(1000000, 9999999));

const xmlBody = 
`<?xml version="1.0" encoding="UTF-8"?>
<products xmlns="">
  <product>
    <code>{{code}}</code>
    <date_time>{{currentDate}}</date_time>
    <status>N</status>
   </product>
</products>`;

pm.variables.replaceIn(xmlBody);
pm.environment.set('xml', xmlBody);

/*Request body:
mode: raw
body: {{xml}}*/

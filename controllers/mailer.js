var myApiKey = 'PARTY4ALL2018*';
var myDomain = 'mydomain.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: myApiKey, domain: myDomain });
var mailcomposer = require('mailcomposer');

module.exports = {
    enviar(req, res) {
        var datos = mailcomposer({
        from: 'you@samples.mailgun.org',
        to: 'darwin.luque@gmail.com',
        subject: 'Test email subject',
        body: 'Test email text',
        html: '<b> Test email text </b>'
        });

        mailgun.messages().sendMime(datos, function (sendError, body) {
            if (sendError) {
                console.log(sendError);
                return;
            }
            else{
                console.log(body);
            }   
        });
    
    },

};
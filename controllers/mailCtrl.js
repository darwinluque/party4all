var nodemailer = require('nodemailer');
let aws = require('aws-sdk');

//router.post('/', handleSayHello);
module.exports = {
    handleSayHello(req, res) {

    var text = 'Bienvenido a nuestra alicación \n\n' + req.body.name;

    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        SES: new aws.SES({
            apiVersion: '2010-12-01'
        })
    });

    var mailOptions = {
        from: 'info@party4all.com', // sender address
        to: req.body.email, // list of receivers
        subject: 'Bienvenida', // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.enviarMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });
    }
}



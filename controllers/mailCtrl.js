var nodemailer = require('nodemailer');

exports.enviarMail = function(str_primer_nombre, str_segundo_nombre, str_primer_apellido, str_segundo_apellido, str_email, str_password) {
    var respuesta='';
    var primerN = (str_primer_nombre[0].toUpperCase() + str_primer_nombre.substring(1).toLowerCase()).trim();
    var segundoN = (str_segundo_nombre[0].toUpperCase() + str_segundo_nombre.substring(1).toLowerCase()).trim();
    var primerA = (str_primer_apellido[0].toUpperCase() + str_primer_apellido.substring(1).toLowerCase()).trim();
    var segundoA = (str_segundo_apellido[0].toUpperCase() + str_segundo_apellido.substring(1).toLowerCase()).trim();
    var str_nombre = (primerN + ' ' + segundoN + ' ' + primerA + ' ' + segundoA).trim();
    
    var text = '<table width="755" border="0" align="center" cellpadding="0" cellspacing="0">  <tr>    <td bgcolor="#5367A0"><table width="750" border="0" align="center" cellpadding="5" cellspacing="0" bordercolor="#5367A0" bgcolor="#FFFFFF">      <tr>        <th colspan="4" bgcolor="#5367A0" class="Estilo1" scope="col"><img src="http://partyemail.bpsla.com/img/logo.png" width="297" height="131" /></th>      </tr>      <tr>        <td height="20" colspan="4" bordercolor="#FFFFFF"></td>      </tr>      <tr>        <td colspan="4" bordercolor="#FFFFFF" style="font-family:Arial, Helvetica, sans-serif; font-size:14px;">Te damos la bienvenida a Party4All</td>      </tr>      <tr>        <td height="10" colspan="4" bordercolor="#FFFFFF"></td>      </tr>      <tr>        <td colspan="4" bordercolor="#FFFFFF" class="Estilo2" style="text-align:center; font-family: Arial, Helvetica, sans-serif; color:#404F7B; font-size:16px;"><strong>' + str_nombre + '</strong></td>      </tr>      <tr>        <td height="10" colspan="4" bordercolor="#FFFFFF"></td>      </tr>      <tr>        <td colspan="4" bordercolor="#FFFFFF"  style="text-align:justify; font-family: Arial, Helvetica, sans-serif; font-size:14px;"><p>Gracias por usar <strong>Party4All</strong>, ac&aacute; te brindamos acceso a las mejores opciones de entretenimiento.</p>            <p>Recuerda que en nuestro sitio web <a href="www.party4all.co" target="_blank">www.party4all.co</a>, encontrar&aacute;s informaci&oacute;n actualizada de nuestros servicios. Adicionalmente, dando puedes ver la informaci&oacute;n relacionada al los terminos y condiciones.</p></td>      </tr>      <tr>        <td width="20" bordercolor="#FFFFFF"></td>        <td width="200" bordercolor="#FFFFFF" style="font-family: Arial, Helvetica, sans-serif; text-align:left; color:#404F7B; font-size:14px; padding:10px;"><strong>Tu nombre de usuario es:</strong></td>        <td colspan="2" bordercolor="#FFFFFF" style="font-family: Arial, Helvetica, sans-serif; text-align:left; color:#404F7B; font-size:14px; padding:10px;"><strong>' + str_email.toLowerCase() + '</strong></td>      </tr>      <tr>        <td bordercolor="#FFFFFF"></td>        <td bordercolor="#FFFFFF" style="font-family: Arial, Helvetica, sans-serif; text-align:left; color:#404F7B; font-size:14px; padding:10px;"><strong>Tu contrase&ntilde;a actual es:</strong></td>        <td colspan="2" bordercolor="#FFFFFF" style="font-family: Arial, Helvetica, sans-serif; color:#404F7B; text-align:left; font-size:14px; padding:10px;"><strong>' + str_password + '</strong></td>      </tr>      <tr>        <td height="20" bordercolor="#FFFFFF"></td>        <td bordercolor="#FFFFFF"></td>        <td colspan="2" bordercolor="#FFFFFF"></td>      </tr>      <tr bgcolor="#A5BBDC">        <td colspan="4" bordercolor="#DDE0EC" bgcolor="#DDE0EC" style="font-family: Arial, Helvetica, sans-serif; font-size:12px; text-align:justify; padding:15px;"><strong>Descarga de Responsabilidad: </strong><br />          Este mensaje contiene informaci&oacute;n confidencial y esta dirigido solamente al remitente especificado. Si usted no es el destinatario no debe tener acceso, distribuir ni copiar este e-mail. Notifique por favor al remitente inmediatamente si usted ha recibido este mensaje por error y eliminelo de su sistema. La transmisi&oacute;n del e-mail no se puede garantizar que sea segura, sin errores o como que la informaci&oacute;n podr&iacute;a ser interceptada, alterada, perdida, destruida, llegar atrasado, incompleto o contener virus, por lo tanto el remitente no acepta la responsabilidad por ningunos de los errores u omisiones en el contenido de este mensaje, que se presentan como resultado de la transmisi&oacute;n del e-mail. Si la verificaci&oacute;n se requiere, por favor solicite una versi&oacute;n impresa.</td>      </tr>      <tr bgcolor="#A5BBDC">        <td colspan="4" bordercolor="#DDE0EC" bgcolor="#DDE0EC" style="font-family: Arial, Helvetica, sans-serif; font-size:12px; text-align:justify; padding:15px;"><strong>Disclaimer: </strong><br />          This message contains confidential information and is intended only for recipient specified. If you are not recipient you should not disseminate, distribute or copy this e-mail. Please notify to sender immediately if you have received this message by mistake and delete this from your system. E-mail transmission cannot be guaranteed to be secure or error-free as information could be intercepted, corrupted, lost, destroyed, arrive late or incomplete, or contain viruses. The receptor therefore does not accept liability for any errors or omissions in the contents of this message, which arise as a result of e-mail transmission. If verification is required, please request a hard-copy version.</td>      </tr>      <tr bgcolor="#A5BBDC">        <td colspan="4" bgcolor="#5367A0" style=" font-family: Arial, Helvetica, sans-serif; color:#FFFFFF; font-size:14px; text-align:center; padding:15px;"><p><strong>NOTA:</strong> Este es un correo autom&aacute;tico, no responda ni env&iacute;e informaci&oacute;n a este buz&oacute;n de correo. </p></td>      </tr>    </table></td>  </tr></table>';
    
    //Creamos el objeto de transporte
    var transporter = nodemailer.createTransport({
        //pool: true,
        //service: 'partyemail.bpsla.com',
        host: 'smtp.mailgun.org',
        port: 25,
        //secure: true, // use TLS
        auth: {
            user: 'postmaster@partyemail.bpsla.com',
            pass: 'test123'
        }
    });

    var mailOptions = {
        from: 'info-party4all@party4all.co', // sender address
        //to: 'darwin.luque@gmail.com', // list of receivers
        to: str_email.toLowerCase(), // list of receivers
        subject: 'Te damos la bienvenida a Party4All', // Subject line
        //text: text, //, // plaintext body
        html: text,
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            res.json({
                code: '5',
                message: 'ERROR: No se puedo enviar el correo, se presentó el siguiente error: '+error,
            });
            return 'ERROR: No se puedo enviar el correo, se presentó el siguiente error: '+error;
        }else{
            res.json({
                code: '0',
                message: 'El correo fue enviado con exito - '+info.response,
            });
            return 'El correo fue enviado con exito - '+info.response;
        };
    });

    //return respuesta;
}




const nodemailer = require('nodemailer');

exports.send = async (req, res) => {

    var transporter = nodemailer.createTransport({
        service: `${process.env.SERVICE}`,
        auth: {
            user: `${process.env.EMAIL_SENDER}`, 
            pass: `${process.env.PASS_EMAIL_SENDER}` 
        }
    });

    const mailOptions = {
        from: `"LAVM - Luis Vanegas 👨‍💻📡" <angelvamart@hotmail.com>`,
        to: 'angelvamart@hotmail.com',
        subject: 'Este es el asunto del correo',
        html: `
        <strong>Nombre:</strong> Luis Angel Vanegas Martinez <br/>
        <strong>E-mail:</strong> angelvamart@hotmail.com  <br/>
        <strong>Mensaje:</strong> este es el mensaje del correo como prueba de que fué enviado
        `
    };

    transporter.sendMail(mailOptions, function (err, result) {
        if (err)
            res.json(err)
        else
            res.json(result)
    });
};


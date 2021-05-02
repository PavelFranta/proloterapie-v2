const nodemailer = require('nodemailer');

exports.handler = function (event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });

    transporter.sendMail({
        from: 'Proloterapie@proloterapie.com',
        to: [process.env.SMTP_RECEPIENT],
        subject: `Proloterapie - webový formulář`,
        html: `
            <h1>Proloterapie dr. Půlpán</h1>
            <p>(odesláno z webového formuláře na 
                <a href="https://www.ortopedie-pulpan.com">www.ortopedie-pulpan.com</a>
            </p>
            <div style="text-align: left; padding: 15px">
            <div style="margin-bottom:15px"><strong>Celé jméno: </strong>${data.fullName}</div>
            <div style="margin-bottom:15px"><strong>E-mail: </strong>${data.email}</div>
            <div style="margin-bottom:15px"><strong>Telefon: </strong>${data.phone}</div>
            <div style="display: flex; flex-wrap: wrap;">
                <strong style="padding-right: 5px">Popis potíží: </strong>
                <span style="max-width: 350px;">${data.message}</span>
            </div>
            `
    }, function (error) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
                statusCode: 200,
                body: 'Mail sent'
            });
        }
    });
}

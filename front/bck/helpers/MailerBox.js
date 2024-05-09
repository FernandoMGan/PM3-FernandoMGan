// File: C:\Home\Developing\PM3-FernandoMGan\front\src\helpers\MailerBox.js

const assembleEmail = (name, email, message, msgtxt) => {
    // Construye el objeto de datos para enviar por correo electrónico
    const emailData = {
        name: name,
        email: email,
        message: message,
        msgtxt: msgtxt
    };
    
    // Llama a la función para enviar el correo electrónico con los datos construidos
    sendEmail(emailData);
};

const sendEmail = async (emailData) => {
    const url = 'http://your-backend-url/send-email';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailData)
        });

        if (response.ok) {
            const result = await response.text();
            console.log('Correo electrónico enviado correctamente:', result);
            return true;
        } else {
            throw new Error('Error al enviar el correo electrónico');
        }
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        return false;
    }
};

export { assembleEmail };
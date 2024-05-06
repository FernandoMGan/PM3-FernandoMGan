// File C:\Home\Developing\PM3-FernandoMGan\front\src\views\MailerEmail.jsx

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; // Importado Form y Button de react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/MailerEmail.module.css';
import ImgCompanyLogo from '../assets/company/CompanyLogo.svg';

const MailerEmail = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [asunto, setAsunto] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Obtener el nombre y el correo electrónico del estado
        const idName = name;
        const idEmail = email;

        // Construir el mensaje con el nombre dinámico
        const emailContent = {
            name: idName,
            email: idEmail,
            asunto: 'Bpo Clinics - Confirmacion de Cuenta',
            message: `Chat: Arma aquí un mensaje (no olvides hacer un rectángulo recuadrado y poner encima el logo de la compañía que está en ${ImgCompanyLogo} dale un tamaño de 500px) que dé la bienvenida a ${idName} y las gracias a nuestro sistema de salud, y le dé el mensaje que ya puede loguearse en el sistema y disfrutar del sistema de salud.`,
        };

        try {
            const response = await fetch('/systems/sendemail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Token': 'Autenticado'
                },
                body: JSON.stringify(emailContent),
            });

            if (response.ok) {
                alert(`Correo electrónico enviado correctamente a ${emailContent.email}.`);
                window.location.href = '/';
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            console.error('Error al enviar el correo electrónico:', error.message);
            alert('Error al enviar el correo electrónico. Por favor, inténtelo de nuevo más tarde.');
        }
    };

    const handleCancel = () => {
        window.location.href = '/';
    };

    const handleClear = () => {
        setName('');
        setEmail('');
        setMessage('');
        setAsunto('');
    };

    const handleOnChange = () => {
        setName(inpputname.value);
        setEmail(inputemail.value);
        setAsunto('Bpo Clinics - Gracias por contactarnos');
        setMessage(inpputmsg.value);

    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className={styles.contenedor + ' ' + styles.navbar}>
                <Form.Group controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control className={styles.inptxt} id='inpputname' type="text" placeholder="Ingrese su nombre" name='inpputname' value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control className={styles.inpemail} id='inpputemail' type="email" placeholder="Ingrese su correo electrónico" name='inpputemail' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formMessage">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} className={styles.txtarea} placeholder="Explique brevemente su consulta" name='inpputmsg' value={message} onChange={(e) => setMessage(e.target.value)} />
                </Form.Group>

                <div>
                    <br />
                    <Button className="btnbuttons" variant="primary" type="submit">Aceptar</Button>{' '}
                    <Button className="btnbuttons" variant="secondary" onClick={handleCancel}>Cancelar</Button>{' '}
                    <Button className="btnbuttons" variant="danger" onClick={handleClear}>Limpiar</Button>
                </div>
            </div>
        </Form>
    );
};

export default MailerEmail;

import express from 'express';
import morgan from 'morgan';
import Transporter from './controller/nodemailer.js';
import { emailRouter } from './routes/email.routes.js';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//**---- INICIO DE SERVIDOR */
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
    console.log(`🚧 Server on http://localhost:${PORT}`)
);
server.on('error', (err) => console.log(err));

app.get('/', (req, res) => {
    res.status(200).render('index.html');
});
app.get('/email', emailRouter, async (req, res) => {
    const { nombre, apellido, email, password } = req.body;
    let htmlTemplate = `
    <h1>SU DATOS INGRESADOS SON</h1>
    <h2>Hola ${nombre} ${apellido}</h2>
    <p>Su correo ${email} su contraseña ${password}</p>
    `;
    Transporter;
    await Transporter.sendMail({
        from: 'Mensaje de prueba <Prueba@email.com',
        to: email,
        subject: ' mensaje de prueba desde el servidor',
        html: htmlTemplate,
    });
});

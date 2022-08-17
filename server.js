import express from 'express';
import morgan from 'morgan';
import Transporter from './controller/nodemailer.js';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


//**---- INICIO DE SERVIDOR */
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
    console.log(`🚧 Server on http://localhost:${PORT}`)
);
server.on('error', (err) => console.log(err));

app.get('/', (req, res) => {
    res.status(200).render('index.html')
});
app.get('/email', async (req, res) => {
    Transporter;
    await Transporter.sendMail({
        from: 'Mensaje de prueba <Prueba@email.com',
        to: 'garyjuego01@gmail.com',
        subject: ' mensaje de prueba desde el servidor',
        html: `
        <h1>Hola mucho gusto</h1>
        <p>Esto es un mensaje de prueba enviado mediante el servidor de express utilizando sendinblue</p>
        `,
    });
});

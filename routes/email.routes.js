import  Router  from "express";

export const emailRouter =Router()

emailRouter.post('/',(req,res)=>{
    const{nombre,apellido, email, password}= req.body
    let htmlTemplate = `
    <h1>SU DATOS INGRESADOS SON</h1>
    <h2>Hola ${nombre} ${apellido}</h2>
    <p>Su correo ${email} su contraseña ${password}</p>
    `

})
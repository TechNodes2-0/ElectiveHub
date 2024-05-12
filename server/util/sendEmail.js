const nodemailer = require("nodemailer")



module.exports.sendEmail = async({email,subject,message})=>{
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
    },
  });
    try{
          const info = await transporter.sendMail({
            from: process.env.USER_EMAIL, // admit email or company offical email
            to: email, // user email 
            subject: subject, // subject
            text: message, // message
          });
          console.log("email sent successfully")
    }
    catch(err){
        console.error(err);
        throw new Error("Email is not sent");
    }
}
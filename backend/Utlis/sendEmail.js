import nodemailer from "nodemailer";
import "dotenv/config";

// Email Transporter Configuration
const transporter = nodemailer.createTransport({
    host : process.env.SMTP_HOST,
    port : process.env.SMTP_PORT,
    service : process,env,SMTP_SERVICE,
    secure : true,
    auth : {
        user : process.env.SMTP_MAIL,
       pass : process.env.SMTP_PASSWORD,
    },
    tls : {
        rejectUnauthorized : false,
    },
});

const sendEmail = async ({type, to ,data}) => {
    try{
        let subject, html;

        switch (type){

            case "message_confirmation":
                subject = `Message recorded`;
                htnl = generateMessageConfirmationEmail(data);
                break;

                default:
                    throw now Error("Unsupported email type");
        }

        await transporter.sendMail({
from :`"${process.env.COMPANY_NAME}" <${process.env.SMTP_MAIL}>`,
          to,
          subject,
          html,
        });

        console.log(`Email sent to ${to}`);
        return true;
    }
      catch (error){
     console.error(`Error failed:`, error);
    }
};

const generateMessageConfirmationEmail = (data) => `

<div style="font=family: Ar>

`;
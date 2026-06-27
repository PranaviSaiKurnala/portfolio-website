const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

const sendContact = async (req, res) => {

    try {

        const { name, email, subject, message } = req.body;
        console.log(req.body);

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        }

        const contact = await Contact.create({
            name,
            email,
            subject,
            message
        });

        await sendEmail(name, email, subject, message);

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            contact
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = { sendContact };
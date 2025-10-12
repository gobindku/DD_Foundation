const contact = require("../models/contact");

const contactForm = async (req, res) => {
    try {
        const { name, email,phone, massage } = req.body;
        if (!name || !email || !phone|| !massage) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }
        await contact.create({ name, email,phone ,massage });
        return res.status(200).json({
            message: "Contact created successfully",
        });
    } catch (error) {
            return res.status(500).json({
                message: "Error creating contact",
            });
        }
    };
    
    module.exports = contactForm ;
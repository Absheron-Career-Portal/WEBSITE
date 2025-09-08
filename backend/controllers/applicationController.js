const Application = require('../models/Application');
const transporter = require('../config/email');

exports.submitApplication = async (req, res) => {
  try {
    const { jobId, jobTitle, firstName, profession, mobile, cvText, email } = req.body;


    if (!jobId || !jobTitle || !firstName || !email) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }


    const application = new Application({
      jobId,
      jobTitle,
      firstName,
      profession,
      mobile,
      cvText,
      email
    });

    await application.save();


    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `New Job Application: ${jobTitle}`,
      html: `
        <h2 style="color: #333; font-family: Arial, sans-serif;">New Job Application Received</h2>
        <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; font-size: 14px; border: 1px solid #ddd;">
          <tr style="background-color: #f2f2f2;">
            <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold; width: 30%;">Position:</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${jobTitle}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Applicant:</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${firstName}</td>
          </tr>
          <tr style="background-color: #f2f2f2;">
            <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Email:</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Phone:</td>
            <td style="border: 1px solid #000000ff; padding: 8px;">${mobile || 'Not provided'}</td>
          </tr>
          <tr style="background-color: #000000ff;">
            <td style="border: 1px solid #000000ff; padding: 8px; font-weight: bold;">CV Text:</td>
            <td style="border: 1px solid #000000ff; padding: 8px;">${cvText || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #000000ff; padding: 8px; font-weight: bold;">Profession:</td>
            <td style="border: 1px solid #000000ff; padding: 8px;">${profession || 'Not applicable'}</td>
          </tr>
          <tr style="background-color: #000000ff;">
            <td style="border: 1px solid #000000ff; padding: 8px; font-weight: bold;">Application Date:</td>
            <td style="border: 1px solid #000000ff; padding: 8px;">${new Date().toLocaleString()}</td>
          </tr>
        </table>
      `,
      attachments: req.file
        ? [{ filename: req.file.originalname, content: req.file.buffer }]
        : []
    };


    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Application Received',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0056b3;">Hörmətli namizəd,</h2>
          <p>Müraciətiniz Abşeron Logistika Mərkəzinin CV portalı vasitəsilə uğurla qəbul edilmişdir.</p>
          <p>Bildirmək istəyirik ki, vakansiya üçün müraciət mərhələsi bitdikdən sonra bütün müraciətlər nəzərdən keçiriləcək. </p>
          <p>Yalnız vakansiyanın tələblərinə uyğun hesab edilən namizədlərlə növbəti mərhələdə əlaqə saxlanılacaq. </p>
          <p>Digər namizədlərin müraciətləri isə məlumat bazasında saxlanılacaq və gələcək imkanlar üçün nəzərdən keçiriləcəkdir. </p>
          <p>Mərkəzimizə göstərdiyiniz marağa görə təşəkkür edirik.</p>
        </div>
      `
    };


    try {
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(userMailOptions);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    res.status(201).json({ success: true, message: 'Application submitted successfully' });

  } catch (error) {
    console.error('Application submission error:', error);
    res.status(500).json({ success: false, error: 'Failed to submit application' });
  }
};

exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ applicationDate: -1 });
    res.status(200).json({ success: true, data: applications });
  } catch (error) {
    console.error('Get applications error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch applications' });
  }
};
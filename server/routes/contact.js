const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const db = require('../config/database');

// GET all contact messages
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM contact_messages ORDER BY created_at DESC'
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({ message: 'Error fetching contact messages' });
  }
});

// GET unread contact messages
router.get('/unread', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM contact_messages WHERE is_read = FALSE ORDER BY created_at DESC'
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching unread messages:', error);
    res.status(500).json({ message: 'Error fetching unread messages' });
  }
});

// GET single contact message by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM contact_messages WHERE id = ?',
      [req.params.id]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Contact message not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching contact message:', error);
    res.status(500).json({ message: 'Error fetching contact message' });
  }
});

// POST new contact message
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Configure your email transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CONTACT_EMAIL,      // your email from .env
      pass: process.env.CONTACT_EMAIL_PASS  // your app password from .env
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.CONTACT_EMAIL,          // your email from .env
    subject: `Portfolio Contact: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    res.status(500).json({ message: 'Failed to send message.', error });
  }
});

// PUT mark message as read/unread
router.put('/:id/read', async (req, res) => {
  try {
    const { is_read } = req.body;

    const [result] = await db.execute(
      'UPDATE contact_messages SET is_read = ? WHERE id = ?',
      [is_read !== undefined ? is_read : true, req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Contact message not found' });
    }

    res.json({ message: 'Message status updated successfully' });
  } catch (error) {
    console.error('Error updating message status:', error);
    res.status(500).json({ message: 'Error updating message status' });
  }
});

// DELETE contact message
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.execute(
      'DELETE FROM contact_messages WHERE id = ?',
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Contact message not found' });
    }

    res.json({ message: 'Contact message deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact message:', error);
    res.status(500).json({ message: 'Error deleting contact message' });
  }
});

// GET contact statistics
router.get('/stats/overview', async (req, res) => {
  try {
    const [totalRows] = await db.execute('SELECT COUNT(*) as total FROM contact_messages');
    const [unreadRows] = await db.execute('SELECT COUNT(*) as unread FROM contact_messages WHERE is_read = FALSE');
    const [recentRows] = await db.execute('SELECT COUNT(*) as recent FROM contact_messages WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)');

    res.json({
      total: totalRows[0].total,
      unread: unreadRows[0].unread,
      recent: recentRows[0].recent
    });
  } catch (error) {
    console.error('Error fetching contact statistics:', error);
    res.status(500).json({ message: 'Error fetching contact statistics' });
  }
});

module.exports = router; 
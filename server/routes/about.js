const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET about information
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM about LIMIT 1');
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'About information not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching about information:', error);
    res.status(500).json({ message: 'Error fetching about information' });
  }
});

// POST create about information
router.post('/', async (req, res) => {
  try {
    const {
      name,
      title,
      description,
      email,
      phone,
      location,
      resume_url,
      profile_image,
      linkedin_url,
      github_url,
      twitter_url
    } = req.body;

    if (!name || !title || !description || !email) {
      return res.status(400).json({ 
        message: 'Name, title, description, and email are required' 
      });
    }

    // Check if about information already exists
    const [existing] = await db.execute('SELECT id FROM about LIMIT 1');
    
    if (existing.length > 0) {
      return res.status(400).json({ 
        message: 'About information already exists. Use PUT to update.' 
      });
    }

    const [result] = await db.execute(
      `INSERT INTO about 
       (name, title, description, email, phone, location, resume_url, profile_image, linkedin_url, github_url, twitter_url) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, title, description, email, phone || null, location || null, resume_url || null, profile_image || null, linkedin_url || null, github_url || null, twitter_url || null]
    );

    res.status(201).json({ 
      message: 'About information created successfully',
      aboutId: result.insertId 
    });
  } catch (error) {
    console.error('Error creating about information:', error);
    res.status(500).json({ message: 'Error creating about information' });
  }
});

// PUT update about information
router.put('/', async (req, res) => {
  try {
    const {
      name,
      title,
      description,
      email,
      phone,
      location,
      resume_url,
      profile_image,
      linkedin_url,
      github_url,
      twitter_url
    } = req.body;

    // Get the first (and should be only) about record
    const [existing] = await db.execute('SELECT id FROM about LIMIT 1');
    
    if (existing.length === 0) {
      return res.status(404).json({ message: 'About information not found' });
    }

    const [result] = await db.execute(
      `UPDATE about SET 
       name = ?, title = ?, description = ?, email = ?, phone = ?, 
       location = ?, resume_url = ?, profile_image = ?, linkedin_url = ?, 
       github_url = ?, twitter_url = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [name, title, description, email, phone, location, resume_url, profile_image, linkedin_url, github_url, twitter_url, existing[0].id]
    );

    res.json({ message: 'About information updated successfully' });
  } catch (error) {
    console.error('Error updating about information:', error);
    res.status(500).json({ message: 'Error updating about information' });
  }
});

// DELETE about information
router.delete('/', async (req, res) => {
  try {
    const [result] = await db.execute('DELETE FROM about');

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'About information not found' });
    }

    res.json({ message: 'About information deleted successfully' });
  } catch (error) {
    console.error('Error deleting about information:', error);
    res.status(500).json({ message: 'Error deleting about information' });
  }
});

module.exports = router; 
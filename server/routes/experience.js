const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET all experience
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM experience ORDER BY is_current DESC, start_date DESC'
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching experience:', error);
    res.status(500).json({ message: 'Error fetching experience' });
  }
});

// GET current experience
router.get('/current', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM experience WHERE is_current = TRUE ORDER BY start_date DESC'
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching current experience:', error);
    res.status(500).json({ message: 'Error fetching current experience' });
  }
});

// GET single experience by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM experience WHERE id = ?',
      [req.params.id]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching experience:', error);
    res.status(500).json({ message: 'Error fetching experience' });
  }
});

// POST new experience
router.post('/', async (req, res) => {
  try {
    const {
      company,
      position,
      description,
      start_date,
      end_date,
      is_current,
      company_url,
      location
    } = req.body;

    if (!company || !position || !description || !start_date) {
      return res.status(400).json({ 
        message: 'Company, position, description, and start date are required' 
      });
    }

    const [result] = await db.execute(
      `INSERT INTO experience 
       (company, position, description, start_date, end_date, is_current, company_url, location) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [company, position, description, start_date, end_date || null, is_current || false, company_url || null, location || null]
    );

    res.status(201).json({ 
      message: 'Experience created successfully',
      experienceId: result.insertId 
    });
  } catch (error) {
    console.error('Error creating experience:', error);
    res.status(500).json({ message: 'Error creating experience' });
  }
});

// PUT update experience
router.put('/:id', async (req, res) => {
  try {
    const {
      company,
      position,
      description,
      start_date,
      end_date,
      is_current,
      company_url,
      location
    } = req.body;

    const [result] = await db.execute(
      `UPDATE experience SET 
       company = ?, position = ?, description = ?, start_date = ?, 
       end_date = ?, is_current = ?, company_url = ?, location = ?
       WHERE id = ?`,
      [company, position, description, start_date, end_date, is_current, company_url, location, req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    res.json({ message: 'Experience updated successfully' });
  } catch (error) {
    console.error('Error updating experience:', error);
    res.status(500).json({ message: 'Error updating experience' });
  }
});

// DELETE experience
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.execute(
      'DELETE FROM experience WHERE id = ?',
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    res.json({ message: 'Experience deleted successfully' });
  } catch (error) {
    console.error('Error deleting experience:', error);
    res.status(500).json({ message: 'Error deleting experience' });
  }
});

module.exports = router; 
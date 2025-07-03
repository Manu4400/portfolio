const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM projects ORDER BY featured DESC, created_at DESC'
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

// GET featured projects
router.get('/featured', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM projects WHERE featured = TRUE ORDER BY created_at DESC'
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    res.status(500).json({ message: 'Error fetching featured projects' });
  }
});

// GET single project by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM projects WHERE id = ?',
      [req.params.id]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ message: 'Error fetching project' });
  }
});

// POST new project
router.post('/', async (req, res) => {
  try {
    const {
      title,
      description,
      long_description,
      technologies,
      project_url,
      github_url,
      image_url,
      featured,
      status,
      start_date,
      end_date
    } = req.body;

    const [result] = await db.execute(
      `INSERT INTO projects 
       (title, description, long_description, technologies, project_url, github_url, image_url, featured, status, start_date, end_date) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, description, long_description, technologies, project_url, github_url, image_url, featured || false, status || 'completed', start_date || null, end_date || null]
    );

    res.status(201).json({ 
      message: 'Project created successfully',
      projectId: result.insertId 
    });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ message: 'Error creating project' });
  }
});

// PUT update project
router.put('/:id', async (req, res) => {
  try {
    const {
      title,
      description,
      long_description,
      technologies,
      project_url,
      github_url,
      image_url,
      featured,
      status,
      start_date,
      end_date
    } = req.body;

    const [result] = await db.execute(
      `UPDATE projects SET 
       title = ?, description = ?, long_description = ?, technologies = ?, 
       project_url = ?, github_url = ?, image_url = ?, featured = ?, 
       status = ?, start_date = ?, end_date = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [title, description, long_description, technologies, project_url, github_url, image_url, featured, status, start_date, end_date, req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project updated successfully' });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ message: 'Error updating project' });
  }
});

// DELETE project
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.execute(
      'DELETE FROM projects WHERE id = ?',
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ message: 'Error deleting project' });
  }
});

module.exports = router; 
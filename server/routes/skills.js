const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET all skills
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM skills ORDER BY category, proficiency_level DESC'
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ message: 'Error fetching skills' });
  }
});

// GET skills by category
router.get('/category/:category', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM skills WHERE category = ? ORDER BY proficiency_level DESC',
      [req.params.category]
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching skills by category:', error);
    res.status(500).json({ message: 'Error fetching skills by category' });
  }
});

// GET skills grouped by category
router.get('/grouped', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM skills ORDER BY category, proficiency_level DESC'
    );
    
    const groupedSkills = rows.reduce((groups, skill) => {
      const category = skill.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(skill);
      return groups;
    }, {});
    
    res.json(groupedSkills);
  } catch (error) {
    console.error('Error fetching grouped skills:', error);
    res.status(500).json({ message: 'Error fetching grouped skills' });
  }
});

// GET single skill by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM skills WHERE id = ?',
      [req.params.id]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching skill:', error);
    res.status(500).json({ message: 'Error fetching skill' });
  }
});

// POST new skill
router.post('/', async (req, res) => {
  try {
    const { name, category, proficiency_level, icon } = req.body;

    if (!name || !category || !proficiency_level) {
      return res.status(400).json({ message: 'Name, category, and proficiency level are required' });
    }

    if (proficiency_level < 1 || proficiency_level > 100) {
      return res.status(400).json({ message: 'Proficiency level must be between 1 and 100' });
    }

    const [result] = await db.execute(
      'INSERT INTO skills (name, category, proficiency_level, icon) VALUES (?, ?, ?, ?)',
      [name, category, proficiency_level, icon || null]
    );

    res.status(201).json({ 
      message: 'Skill created successfully',
      skillId: result.insertId 
    });
  } catch (error) {
    console.error('Error creating skill:', error);
    res.status(500).json({ message: 'Error creating skill' });
  }
});

// PUT update skill
router.put('/:id', async (req, res) => {
  try {
    const { name, category, proficiency_level, icon } = req.body;

    if (proficiency_level && (proficiency_level < 1 || proficiency_level > 100)) {
      return res.status(400).json({ message: 'Proficiency level must be between 1 and 100' });
    }

    const [result] = await db.execute(
      'UPDATE skills SET name = ?, category = ?, proficiency_level = ?, icon = ? WHERE id = ?',
      [name, category, proficiency_level, icon, req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json({ message: 'Skill updated successfully' });
  } catch (error) {
    console.error('Error updating skill:', error);
    res.status(500).json({ message: 'Error updating skill' });
  }
});

// DELETE skill
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.execute(
      'DELETE FROM skills WHERE id = ?',
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.error('Error deleting skill:', error);
    res.status(500).json({ message: 'Error deleting skill' });
  }
});

module.exports = router; 
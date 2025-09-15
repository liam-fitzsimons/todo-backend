require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Test route
app.get('/', (req, res) => {
  res.send('Server is running');
});

const Task = require('./models/Task');

// GET all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find(); // fetch all tasks from MongoDB
    res.json(tasks); // send them back as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error while fetching tasks' });
  }
});

// POST new task
app.post('/api/tasks', async (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Task text is required' });
  }

  try {
    const newTask = new Task({ text });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    console.error('Error saving task:', err);
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// DELETE task by id
app.delete('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    console.error('Error deleting task:', err);
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

// PUT update task by ID
app.put('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body; // Allow editing text and completed status

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { text, completed },
      { new: true } // Return the updated task
    );
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(updatedTask);
  } catch (err) {
    console.error('Error updating task:', err);
    res.status(500).json({ error: 'Failed to update task' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

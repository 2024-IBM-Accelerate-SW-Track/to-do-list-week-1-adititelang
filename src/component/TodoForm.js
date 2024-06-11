import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function TodoForm() {
  return (
    <div style={{ padding: 20 }}>
      <TextField
        label="Add New Item"
        variant="outlined"
        data-testid="new-item-textfield"
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        data-testid="new-item-button"
        style={{ marginTop: 20 }}
      >
        Add
      </Button>
    </div>
  );
}

export default TodoForm;

import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const DeleteUserForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your delete user logic here
    console.log('Deleting user...');
  };

  return (
    <div
      // style={{
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   height: '100vh',
      // }}
      className="mybox"
    >
      <Container>
        <form
          id="centered-form"
          className="delete-user-form-container"
          onSubmit={handleSubmit}
          // style={{
          //   width: '100%',
          //   maxWidth: '400px', // Adjust as needed
          // }}
          
        >
          <Typography variant="h4" align="center" sx={{ mb: 2 }}>
            Delete User
          </Typography>

          <div className="form-group" id="delete_user" sx={{ mb: 2 }}>
            <TextField
              label="Enter Email address"
              type="email"
              variant="outlined"
              fullWidth
              id="enter_delete_email"
              autoComplete="off"
              sx={{ m: 1, minWidth: 250 }}
            />
          </div>

          <Button type="submit" variant="contained" color="primary" sx={{ display: 'block', margin: 'auto', mb: 2 }}>
            Delete
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default DeleteUserForm;

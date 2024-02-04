import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const UpdateUserPasswordForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your update user password logic here
    console.log('Updating user password...');
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
          className="update-user-password-form-container"
          onSubmit={handleSubmit}
          // style={{
          //   width: '100%',
          //   maxWidth: '400px', // Adjust as needed
          // }}
        >
          <Typography variant="h4" align="center" sx={{ mb: 2 }}>
            Update User Password
          </Typography>

          <div className="form-group" id="enter_email_address" sx={{ mb: 2 }}>
            <label htmlFor="update_user_password_email"></label>
            <TextField
              label="Enter Email address"
              type="email"
              variant="outlined"
              fullWidth
              id="update_user_password_email"
              autoComplete="off"
              sx={{ m: 1, minWidth: 250 }}
            />
          </div>

          <div className="form-group" sx={{ mb: 2 }}>
            <label htmlFor="password_update"></label>
            <TextField
            label="Enter New Password"
              type="password"
              variant="outlined"
              fullWidth
              id="password_update"
              required
              sx={{ m: 1, minWidth: 250 }}
            />
          </div>

          <div className="form-group" sx={{ mb: 2 }}>
            <label htmlFor="password_confirm_update"></label>
            <TextField
            label="Confirm New Password"
              type="password"
              variant="outlined"
              fullWidth
              id="password_confirm_update"
              required
              sx={{ m: 1, minWidth: 250, mb: 2 }}
            />
          </div>

          <Button type="submit" variant="contained" color="primary" sx={{ display: 'block', margin: 'auto', mb: 2 }}>
            Update
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default UpdateUserPasswordForm;

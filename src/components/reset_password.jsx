import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const ResetPasswordForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your reset password logic here
    console.log('Resetting password...');
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
          onSubmit={handleSubmit}
          // style={{
          //   width: '100%',
          //   maxWidth: '400px', // Adjust as needed
          // }}
          className="reset-password-from-container"
        >
          <Typography variant="h4" align="center" sx={{ mb: 2 }}>
            Reset Password
          </Typography>

          <div className="form-group" sx={{ mb: 2 }}>
            <label htmlFor="old_password"></label>
            <TextField
              label="Old Password"
              type="password"
              variant="outlined"
              fullWidth
              id="old_password"
              required
              sx={{ m: 1, minWidth: 250 }}

            />
          </div>

          <div className="form-group" sx={{ mb: 2 }}>
            <label htmlFor="new_password"></label>
            <TextField
              label="New Password"
              type="password"
              variant="outlined"
              fullWidth
              id="new_password"
              required
              sx={{ m: 1, minWidth: 250 }}

            />
          </div>

          <div className="form-group" sx={{ mb: 2 }}>
            <label htmlFor="new_password_confirm"></label>
            <TextField
              label="New Password Confirmation"
              type="password"
              variant="outlined"
              fullWidth
              id="new_password_confirm"
              required
              sx={{ m: 1, minWidth: 250 }}

            />
          </div>

          <Button type="submit" variant="contained" color="primary" sx={{ display: 'block', margin: 'auto', mb: 2 }}>
            Reset Password
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default ResetPasswordForm;

import React from 'react';
import { Container, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const UpdateUserRoleForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your update user role logic here
    console.log('Updating user role...');
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
          className="update-user-role-form-container"
        // style={{
        //   width: '100%',
        //   maxWidth: '400px', // Adjust as needed
        // }}
        >
          <Typography variant="h4" align="center" sx={{ mb: 2 }}>
            Update User Role
          </Typography>

          <div className="form-group" id="enter_email_address" sx={{ m: 1, minWidth: 250 }}>
            <label htmlFor="update_user_role_email"></label>
            <TextField
              label="Enter Email address"
              type="email"
              variant="outlined"
              // fullWidth
              id="update_user_role_email"
              autoComplete="off"
              sx={{ m: 1, minWidth: 250 }}
            />
          </div>

          {/* Add vertical space here */}
          <div style={{ marginBottom: '16px' }} />

          <div className="form-group">
            <FormControl sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="select_role_label">Select Role</InputLabel>
              <Select
                labelId="select_role_label"
                id="exampleFormControlSelect1"
                label="Select Role"
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="manager">Manager</MenuItem>
                <MenuItem value="worker">Worker</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Button type="submit" variant="contained" color="primary" sx={{ display: 'block', margin: '16px auto', mb: 2 }}>
            Update
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default UpdateUserRoleForm;

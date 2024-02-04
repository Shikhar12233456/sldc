import React from 'react';
import { Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const CreateUserForm = () => {
    return (
        <div className="mybox" >
            <Container>
                <form id="centered-form" className="create-user-form-container">
                    <Typography variant="h4" align="center" className="heading_create_user">
                        Create User
                    </Typography>

                    <div className="form-group" id="enter_email_address">
                        <TextField
                            label="Enter Email address"
                            type="email"
                            variant="outlined"
                            // fullWidth
                            id="exampleInputEmail1"
                            autoComplete="off"
                            sx={{ m: 1, minWidth: 250 }}
                        />
                    </div>

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

                    <Button type="submit" variant="contained" color="primary">
                        Create
                    </Button>
                </form>
            </Container>
        </div>

    );
};

export default CreateUserForm;

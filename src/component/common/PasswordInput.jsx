import React from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'

const PasswordInput = ({ password, setPassword, showPassword, handleClickShowPassword }) => {
  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
      <FormControl sx={{ width: '25ch' }} variant="outlined" style={{ width: '100%' }}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                  <InputAdornment position="end">
                      <IconButton
                          aria-label={showPassword ? 'hide the password' : 'display the password'}
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                      >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                  </InputAdornment>
              }
              label="Password"
          />
      </FormControl>
  );
};

export default PasswordInput
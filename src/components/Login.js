import React from 'react';
import { TextField } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Button } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Link } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
// import { LockOutlinedIcon } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { Box } from '@mui/material';
import { Container } from '@mui/material';

export default function Login() {
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <TextField 
            margin="normal"
            label="Email Address" 
            required 
            fullWidth 
            name="email"
            autoComplete='email'
            autoFocus 
          />
          <TextField 
            margin="normal"
            label="Pssword" 
            type="password" 
            required 
            fullWidth 
            name="password"
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value="remember" 
            color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained"
          sx={{ mt: 3, mb: 2 }}>
            Sign in
          </Button>
          <Grid container>
            <Grid item xs>
              <Link>Forgot password?</Link> 
            </Grid>
            <Grid item>
              <Link>Sign up</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}
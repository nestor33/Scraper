import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <div>
      <AppBar component='nav' style={{ marginBottom: '50px' }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            sx={{ mr: 2, display: { sm: 'none' } }}
          ></IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Flats
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}></Box>
        </Toolbar>
      </AppBar>
      <br />
      <br />
    </div>
  );
}

export default Header;

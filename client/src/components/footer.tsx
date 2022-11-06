import { Pagination } from '@mui/material';

function Footer() {
  return (
    <Pagination
      count={10}
      shape='rounded'
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    />
  );
}

export default Footer;

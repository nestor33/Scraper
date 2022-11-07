import { Grid, Pagination, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';

export interface Props {
  postsPerPage: number;
  totalPosts: number;
  paginate: any;
}

function PaginationControlled(props: Props) {
  const pageNumbers: number[] = [];
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Grid
      container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack>
        <Typography>Page: {page}</Typography>
        <Pagination
          count={pageNumbers.length}
          page={page}
          onChange={handleChange}
          onClick={props.paginate(page)}
        ></Pagination>
      </Stack>
    </Grid>
  );
}

export default PaginationControlled;

import FlatCard from './flatCard';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

export interface Estate {
  id?: number;
  title?: string;
  url?: string;
  imageUrl?: string;
}

function FlatTable() {
  const [estates, setEstates] = useState<Estate[]>([]);

  const getEstates = async () => {
    await axios({
      method: 'GET',
      url: 'http://localhost:3001/scrapeEstates',
    });
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3001/getEstates',
    });
    setEstates(res.data);
    // .then((response) => {
    //   setEstates(response.data);
    // });
  };

  useEffect(() => {
    getEstates();
  }, []);

  return (
    <Grid
      container
      spacing={2}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>{}</div>

      {estates.map((estate) => {
        return (
          <FlatCard
            title={estate.title}
            imgUrl={estate.imageUrl}
            url={estate.url}
          />
        );
      })}
    </Grid>
  );
}

export default FlatTable;

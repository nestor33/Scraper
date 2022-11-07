import FlatCard from './flatCard';
import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './pagination';

export interface Estate {
  id?: number;
  title?: string;
  url?: string;
  imageUrl?: string;
}

function FlatTable() {
  const [estates, setEstates] = useState<Estate[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(18);

  const getEstates = async () => {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3001/getEstates',
    });
    setEstates(res.data);
  };

  const paginate = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    getEstates();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = estates.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Grid container>
        <Grid item>
          <Button
            onClick={async () => {
              await axios({
                method: 'GET',
                url: 'http://localhost:3001/scrapeEstates',
              });
              await getEstates();
            }}
          >
            Scrape estates
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {currentPosts.map((estate) => {
          return (
            <FlatCard
              title={estate.title}
              imgUrl={estate.imageUrl}
              url={estate.url}
            />
          );
        })}
      </Grid>

      <Grid item>
        <Footer
          postsPerPage={postsPerPage}
          totalPosts={estates.length}
          paginate={paginate}
        />
      </Grid>
    </>
  );
}

export default FlatTable;

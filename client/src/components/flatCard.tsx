import { Card, CardHeader, CardMedia, IconButton, Link } from '@mui/material';
export interface FlatProps {
  title?: string;
  imgUrl?: string;
  url?: string;
}

function FlatCard(prop: FlatProps) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} style={{ margin: '50px' }}>
        <CardHeader
          action={
            <IconButton aria-label='settings'>
              <Link href={prop.url} underline='none'>
                {'Visit page on '}
              </Link>{' '}
            </IconButton>
          }
          title={prop.title}
        />

        <CardMedia component='img' height='194' image={prop.imgUrl} />
      </Card>
    </div>
  );
}
export default FlatCard;

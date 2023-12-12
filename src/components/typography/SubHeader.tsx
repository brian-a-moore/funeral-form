import { Grid, styled } from '@mui/material';

type Props = {
  title: string;
};

export default function SubHeader({ title }: Props) {
  return (
    <Grid
      item
      xs={12}
      style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Title>{title}</Title>
    </Grid>
  );
}

const Title = styled('h2')({
  display: 'inline',
  color: '#D7E1FF',
});

import { AddCircle } from '@mui/icons-material';
import IconButton from '@mui/joy/IconButton';
import { Grid } from '@mui/material';
import styled from 'styled-components';

type Props = {
  title: string;
  disabled?: boolean;
  addFn?: () => void;
};

export default function Header({ title, disabled = false, addFn }: Props) {
  return (
    <Grid
      item
      xs={12}
      style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Title style={addFn ? { height: '34px', lineHeight: '34px' } : {}}>
        {title}
      </Title>
      {addFn && (
        <IconButton size="sm" onClick={addFn} disabled={disabled}>
          <AddCircle />
        </IconButton>
      )}
    </Grid>
  );
}

const Title = styled.h1`
  display: inline;
  font-weight: 600;
  color: #1e88e5;
`;

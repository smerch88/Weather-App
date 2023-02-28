import { ListItem, ListItemText } from '@mui/material';

export const RenderWeatherDataItem = (label, value) => {
  return (
    <ListItem sx={{ borderBottom: '1px solid black' }}>
      <ListItemText primary={`${label}: ${value}`} />
    </ListItem>
  );
};

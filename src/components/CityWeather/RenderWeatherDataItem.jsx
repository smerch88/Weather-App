import { ListItem, ListItemText } from '@mui/material';

export const RenderWeatherDataItem = (label, value) => {
  return (
    <ListItem>
      <ListItemText primary={`${label}: ${value}`} />
    </ListItem>
  );
};

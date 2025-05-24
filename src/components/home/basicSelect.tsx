import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const BasicSelect: React.FC = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Class"
          onChange={handleChange}
        >
          <MenuItem value={'PREKG'}>PREKG</MenuItem>
          <MenuItem value={'LKG'}>LKG</MenuItem>
          <MenuItem value={'UKG'}>UKG</MenuItem>
          <MenuItem value={'I STD'}>I STD</MenuItem>
          <MenuItem value={'II STD'}>II STD</MenuItem>
          <MenuItem value={'III STD'}>III STD</MenuItem>
          <MenuItem value={'IV STD'}>IV STD</MenuItem>
          <MenuItem value={'V STD'}>V STD</MenuItem>
          <MenuItem value={'VI STD'}>VI STD</MenuItem>
          <MenuItem value={'VII STD'}>VII STD</MenuItem>
          <MenuItem value={'VIII STD'}>VIII STD</MenuItem>
          <MenuItem value={'IX STD'}>IX STD</MenuItem>
          <MenuItem value={'X STD'}>X STD</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect
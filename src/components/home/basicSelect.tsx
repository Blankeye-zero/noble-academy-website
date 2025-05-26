import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { FormHelperText } from '@mui/material';

type BasicSelectProps= {
  control: Control<{
    Class: string;
    Name: string;
    Phone: string;
    Email: string;
    Location: string;
    Message: string;
}, unknown, {
    Class: string;
    Name: string;
    Phone: string;
    Email: string;
    Location: string;
    Message: string;
}>,
errors: FieldErrors<{
    Class: string;
    Name: string;
    Phone: string;
    Email: string;
    Location: string;
    Message: string;
}>
}
const BasicSelect: React.FC<BasicSelectProps> = ({control,errors}) => {
  // const [value, setValue] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setValue(event.target.value as string);
  // };

  return (
    <Box sx={{ minWidth: 120 }}>
      <InputLabel id="Class-Select-Label" htmlFor="Class" sx={{color:errors.Class ? 'primary.contrast' : 'primary.main'}}>Class*</InputLabel>
      <Controller name="Class"
      control={control}
      defaultValue='PREKG'
      rules={{required: 'Class is required'}}
      render={({field}) => (
        <Select
        labelId='Class-Select-Label'
          {...field}
          label="Class"
          fullWidth
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
      )}
      />
      <FormHelperText id="Select-helper-text"> {errors.Class ? errors.Class.message : ''} </FormHelperText>
    </Box>
  );
}

export default BasicSelect
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export const SortByFlavor = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
}


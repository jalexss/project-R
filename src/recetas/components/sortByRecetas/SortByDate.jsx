import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export const SortByDate = () => {
  const [ sort, setSort ] = useState('none');

  const onChangeDate = (event) => {
    setSort(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Sort by</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={sort}
        label="recetas"
        onChange={onChangeDate}
      >
        <MenuItem value="none">
          <em>None</em>
        </MenuItem>
        <MenuItem value='ascending'>Ascending</MenuItem>
        <MenuItem value='descending'>Descending</MenuItem>
      </Select>
    </FormControl>
  )
}


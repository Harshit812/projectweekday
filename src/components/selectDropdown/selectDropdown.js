import React from 'react';
import { Box, OutlinedInput, InputLabel, MenuItem, FormControl, Chip } from '@mui/material';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/actions/action';

const SelectDropDown = ({ options, label, customkey, getFilters }) => {
  const [selectedValue, setSetSelectedValue] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setSetSelectedValue(value);
    dispatch(setFilters({...getFilters, [customkey]: value }));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id={`select-label-${label}`}>{label}</InputLabel>
        <Select
          labelId={`select-label-${label}`}
          multiple
          value={selectedValue}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectDropDown;

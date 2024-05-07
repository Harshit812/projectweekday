import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, ListSubheader } from '@mui/material';
import SelectDropDown from '../selectDropdown/selectDropdown';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/actions/action';
import { DropDowns, RolesOption } from '../../constants/constOptions';

const FilterHeader = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setFilters({ [name]: value }));
  };

  return (
    <Box display="flex">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">Roles</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping" onChange={handleChange} name="jobRole">
          {RolesOption?.map((category) => (
            [
              <ListSubheader key={category.group}>{category.group.toUpperCase()}</ListSubheader>,
              category?.options?.map((option) => (
                <MenuItem value={option.value}>{option.label}</MenuItem>
              ))
            ]
          ))}
        </Select>
      </FormControl>
      {DropDowns?.map((item) => (
        <SelectDropDown customkey={item.key} label={item.label} options={item.options} />
      ))}
    </Box>
  );
};

export default FilterHeader;

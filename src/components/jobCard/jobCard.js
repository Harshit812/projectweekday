import React from 'react';
import { Button, Typography } from '@mui/material';
import { StyledCard, CardContentWrapper, ViewMoreLink, CardActionsWrapper } from '../jobCard/jobCardStyle';

const JobCard = ({ companyName, roleTitle, location, minSalary, maxSalary, minExp, aboutCompany, currencyCode, jdUid }) => {
  const getSalary = () => {
    if (minSalary && maxSalary) {
      return `${minSalary}${currencyCode} - ${maxSalary}${currencyCode}`;
    }
    return `${minSalary || maxSalary}${currencyCode}`;
  };

  return (
    <StyledCard variant="outlined" id={jdUid}>
      <CardContentWrapper>
        <Typography variant="h6" color="textSecondary">
          {companyName}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {roleTitle}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {location}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Estimated Salary: {getSalary()}
        </Typography>
        <Typography variant="body1" gutterBottom>
          About Company:
        </Typography>
        <Typography variant="body2" paragraph>
          {aboutCompany}
        </Typography>
        <ViewMoreLink variant="caption" color="primary" href="#">
          View More
        </ViewMoreLink>
        {minExp && (
          <div style={{ visibility: 'visible' }}>
            <Typography variant="body2" color="textSecondary">
              Minimum Experience
            </Typography>
            <Typography variant="caption">{minExp} Years</Typography>
          </div>
        )}
      </CardContentWrapper>
      <CardActionsWrapper>
        <Button variant="contained" fullWidth color="success" size="medium">
          Easy Apply
        </Button>
      </CardActionsWrapper>
    </StyledCard>
  );
};

export { JobCard };

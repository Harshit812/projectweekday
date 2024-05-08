import React, { useState } from 'react';
import { Button, Typography, Avatar } from '@mui/material';
import {
  StyledCard,
  CardContentWrapper,
  ViewMoreLink,
  CardActionsWrapper
} from '../jobCard/jobCardStyle';

const JobCard = ({
  companyName,
  roleTitle,
  location,
  minSalary,
  maxSalary,
  minExp,
  aboutCompany,
  currencyCode,
  jdUid,
  logoUrl
}) => {
  const [showFullAboutCompany, setShowFullAboutCompany] = useState(false);

  const getSalary = () => {
    if (minSalary && maxSalary) {
      return `${minSalary}${currencyCode} - ${maxSalary}${currencyCode}`;
    }
    return `${minSalary || maxSalary}${currencyCode}`;
  };

  const toggleAboutCompany = () => {
    setShowFullAboutCompany(!showFullAboutCompany);
  };

  return (
    <StyledCard variant="outlined" id={jdUid}>
      <CardContentWrapper>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          {logoUrl && <Avatar alt={companyName} src={logoUrl} />}
          <div style={{ marginLeft: logoUrl ? '8px' : '0' }}>
            <Typography variant="h6" component="div">
              {companyName}
            </Typography>
            <Typography variant="h5">
              {roleTitle}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" fontWeight={500}>
              {location}
            </Typography>
          </div>
        </div>

        <Typography variant="body2" color="textSecondary" gutterBottom>
          Estimated Salary: {getSalary()}
        </Typography>
        <Typography variant="body1" gutterBottom>
          About Company:
        </Typography>
        <Typography variant='subtitle1' gutterBottom fontWeight={800}>
          About Us:
        </Typography>
        <Typography variant="body2" paragraph>
          {showFullAboutCompany ? aboutCompany : aboutCompany.slice(0, 450)}
          {!showFullAboutCompany && aboutCompany.length > 100 && (
            <ViewMoreLink variant="caption" color="primary" onClick={toggleAboutCompany}>
              View More
            </ViewMoreLink>
          )}
        </Typography>
        {minExp && (
          <div style={{ visibility: 'visible' , paddingBottom: '8px'}}>
            <Typography variant="body2" color="textSecondary">
              Minimum Experience
            </Typography>
            <Typography variant="body2" fontWeight={800}>{minExp} Years</Typography>
          </div>
        )}
      </CardContentWrapper>
      <CardActionsWrapper>
        <Button variant="contained" fullWidth color="success" size="medium" style={{borderRadius: 8}}>
          Easy Apply
        </Button>
      </CardActionsWrapper>
      <CardActionsWrapper>
      <Button variant="contained" fullWidth color="info" size="medium" style={{borderRadius: 8}}>
          Unlock Referral Ask
        </Button>
      </CardActionsWrapper>
    </StyledCard>
  );
};

export { JobCard };

import { styled,Card,
  CardActions,
  CardContent,
  Link } from '@mui/material';

const StyledCard = styled(Card)({
  color: 'black',
  borderRadius: '20px',
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px 0px',
});

const CardContentWrapper = styled(CardContent)({
  paddingBottom: '0px',
});

const ViewMoreLink = styled(Link)({
  display: 'block',
  textAlign: 'center',
});

const CardActionsWrapper = styled(CardActions)({
  paddingTop: '0px',
  paddingBottom: '16px',
});

export { StyledCard, CardContentWrapper, ViewMoreLink, CardActionsWrapper };

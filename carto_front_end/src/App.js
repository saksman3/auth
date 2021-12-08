import { useRoutes } from 'react-router-dom';
import { CssBaseline, Grid, makeStyles, ThemeProvider } from '@material-ui/core';
import LazyLoadRoute from 'components/common/LazyLoadRoute';
import theme from './theme';
import routes from './routes';
import useAuth from './hooks/Auth0';
import Cookies from "js-cookie";

const useStyles = makeStyles(() => ({
  app: {
    flex: '1 1 auto',
    overflow: 'hidden',
  },
}));

export default function App() {
  const routing = useRoutes(routes);
  const classes = useStyles();
  useAuth();
  console.log(Cookies.get('token'))
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container direction='column' className={classes.app}>
        <LazyLoadRoute>{routing}</LazyLoadRoute>
      </Grid>
    </ThemeProvider>
  );
}

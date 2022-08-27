import NavigationBar from '../components/NavigationBar';
import { Button, createTheme, CssBaseline, Paper, styled, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import GameCategoryList from '../components/GameCategory';
import { ThemeProvider } from '@emotion/react';

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

export default function LandingPage() {
  return (
    // color: "white", background: "#121212"
    <div style={{ padding: "1rem",  }}>
      <ThemeProvider theme={darkTheme} >
        <CssBaseline />
        <Typography variant='h1'>Arcade</Typography>
        <Typography variant='h2'>2022</Typography>
        <GameCategoryList categoryName={"Latest Games"} />
        <GameCategoryList categoryName={"Game Materials"} />
      </ThemeProvider>
    </div>
  );
}


import { Grid } from '@mui/material';
import { Button, createTheme, Paper, styled, Typography } from '@mui/material';
import GameItem from './GameListItem';

export default function GameCategoryList(props: { categoryName: string }) {
  return <div style={{ marginTop: "1rem" }}>

    <Typography variant='h4'>{props.categoryName}</Typography>
    <Grid container spacing={8}>
      <Grid item >
        <GameItem gameName='Game Off' views={100} />
      </Grid>
      <Grid item >
        <GameItem gameName='Game Off' views={100} />
      </Grid>
    </Grid>

    <div style={{ display: "flex" }}>
      <hr style={{ flex: 1, height: 0, margin: "auto" }} />
      <Button variant="contained">Load more</Button>
      <hr style={{ flex: 1, height: 0, margin: "auto" }} />
    </div>
  </div>
}
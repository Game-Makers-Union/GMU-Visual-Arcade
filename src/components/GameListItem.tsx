import { Typography } from "@mui/material";

export default function GameItem(props: { gameName: string, views: number }) {
  return <div style={{
    display: 'flex', flexDirection: 'column',
    alignContent: 'center', justifyContent: 'center',
    width: 'min-content', overflow: 'hidden',
    textAlign: "center"
  }}>
    <img src="https://http.dog/200.jpg" style={{ width: '300px', height: '300px', borderRadius: 12 }}></img>
    <Typography variant="h6">{props.gameName}</Typography>
    <Typography variant="h6">{props.views}</Typography>
  </div>;
}

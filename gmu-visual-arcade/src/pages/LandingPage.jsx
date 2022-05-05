import '../bootstrap.css';
import NavigationBar from '../components/NavigationBar';
import GameView from '../components/GameView';

const LandingPage = () => {
  return (
    <div>
      <NavigationBar />
      <GameView url="https://thai-duong.itch.io/dave-the-duck" />
    </div>
  );
}

export default LandingPage;
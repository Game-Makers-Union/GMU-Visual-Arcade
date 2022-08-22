import '../bootstrap.css';

const GameView = (props) => {
  let gameName = "Game";
  let creatorName = "Creator";
  let description = "Hello this is the description for a game";

  return (
    <div>
      {/* Get game information from props.url */}
      <br />
      <div className='row'>
        <div className='col'>
          <h1 className='text-center'>{gameName} - developed by {creatorName}</h1>
        </div>
      </div>

      <hr />

      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          {description}
        </div>
        <div className='col-3'></div>
      </div>

      <hr />

      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <center>
            <button type="button" class="btn btn-primary">Download</button>
          </center>
        </div>
        <div className='col'></div>
      </div>
    </div>
  );
}

export default GameView;
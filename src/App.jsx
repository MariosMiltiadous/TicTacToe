import Player from "./components/Player";

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
         <Player name="Mario" symbol="X"/>
         <Player name="Kostakis" symbol="O"/>
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App

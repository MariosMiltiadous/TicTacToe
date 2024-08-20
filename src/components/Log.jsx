export default function Log({logTurns}){

    return(
        <ol id="log">
            {logTurns.map(turnData => 
            <li key={`${turnData.square.row} ${turnData.square.col}` }>
                {turnData.player} selected {turnData.square.row}, {turnData.square.col}
            </li>
        )}
        </ol>
    )
   
}
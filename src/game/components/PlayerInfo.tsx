import * as React from 'react'
import globals from '../../styles/globals'
import { PlayerType, Score } from '../../domain/types'
import cellStyle from '../../styles/cell'

type PlayerInfoProps = {
  currentPlayer: PlayerType
  score: Score
}

export default function PlayerInfo(props: PlayerInfoProps) {
  const styles = buildStyles(props.currentPlayer)

  return (
    <div
      style = {styles.infoDiv}
    >
    <table style={styles.playerTable}>
      <tbody>
        <td>
          <tr style={styles.player1.score}>{props.score.player1}</tr>
          <tr style={styles.player1.label}>Player 1</tr>
        </td>
        <td>
          <tr style={styles.player2.score}>{props.score.player2}</tr>
          <tr style={styles.player2.label}>Player 2</tr>
        </td>
      </tbody>
    </table>
    </div>
  )
}

function buildStyles(currentPlayer: PlayerType) {
  return {
    playerTable: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 30
    },
    player1: {
      label: {
        fontWeight: currentPlayer === 1 ? 'bold' : 'normal',
        width: 120,
        fontSize: globals.fontSize,
        color:"#00bc8c"

      },
      score: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',    
        color: 'black',
        fontSize: globals.fontSize,
        textAlign: 'center',
        ...cellStyle(1)
      }
    },
    player2: {
      label: {
        fontWeight: currentPlayer === 2 ? 'bold' : 'normal',
        width: 120,
        fontSize: globals.fontSize,
        color:"#00bc8c"
      },
      score: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',    
        color: 'white',
        fontSize: globals.fontSize,
        textAlign: 'center',
        ...cellStyle(2)
      }
    },
    infoDiv: {
      background:"#303030",
      width: window.innerWidth * 0.4,
      alignSelf:"center"
    }
  } as const
}

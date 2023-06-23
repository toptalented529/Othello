import { Player, CellOwner } from '../domain/types'

function getBackgroundImage(player: CellOwner) {
  if (player === Player.One) return 'url("img/white.png")'
  if (player === Player.Two) return 'url("img/black.png")'

  return 'none'
}

export default function(player: CellOwner) {
  return {
    backgroundImage: getBackgroundImage(player),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: 70,
    height: 70,
    'object-fit': 'cover'
    
  }
}

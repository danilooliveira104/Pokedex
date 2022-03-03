export function defineColor (type: string | undefined) {
  switch (type) {
    case 'fire':
        return '#FC6C6D'
    case 'water':
      return '#76BEFE'
    case 'electric':
        return '#FFD76F'
    case 'grass':
      return '#48CFAF'
    case 'psychic':
      return '#a748cf'
    case 'bug':
      return '#48cf79'
    case 'ground':
      return '#cf6848'
    case 'poison':
      return '#8c48cf'
    case 'fairy':
      return '#cf4883'
    case 'bug':
      return '#48cf53'
    case 'normal':
      return '#cf9948'
    case 'ghost':
      return '#224373'
    case 'rock':
      return '#65645D'
    case 'fighting':
      return '#F77B00'
    case 'dragon':
      return '#B84336'
    case 'dark':
      return '#323536'
    case 'ice':
      return '#ADD8E6'
    case 'steel':
      return '#6D757A'
    case 'flying':
      return '#577AC5'
    case 'shadow':
      return '#0F1127'
    case undefined:
      return '#000000'
  }
}
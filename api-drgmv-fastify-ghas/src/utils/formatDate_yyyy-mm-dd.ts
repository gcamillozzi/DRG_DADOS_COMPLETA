import { date } from 'zod'

/** @description Format date to format yyyy-MM-ddTHH:mm:ss */
export function converterData(dataStr: string | null): string | null {
  if (!dataStr) {
    return null
  }
  console.log('Data = ' + dataStr)

  if (dataStr.includes('T')) {
    return dataStr; // Retorna a string no formato ISO sem modificações
  }
  
  const [date, time] = dataStr.split(' ')

  const [hora, minuto, segundo] = time.split(':')

  const [dia, mes, ano] = date.split('/')
  const novaDataStr = `${ano}-${mes}-${dia}T${hora}:${minuto}:${segundo}`

  return novaDataStr
}
// DD/MM/RRRR HH24:MI:SS

// yyyy-MM-ddTHH:mm:ss

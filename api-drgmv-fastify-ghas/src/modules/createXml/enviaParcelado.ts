import knex from '../../config/database'
import { admission } from './admissionSend'

export async function enviaPareclado() {
  const TBL_ATENDIMENTO = process.env.TBL_ATENDIMENTO
  const dataAtendimentoFromDatabase = await knex
    .select('*')
    .from(TBL_ATENDIMENTO)
    .where({ TP_STATUS: 'A' })
    .orderBy('SITUACAO_INTERNACAO', 'ASC')
  if (!dataAtendimentoFromDatabase[0]) {
    console.log('NENHUM DADO ENCONTRADO.')
    return
  }
  console.log(
    'FEZ O SELECT DE ' + dataAtendimentoFromDatabase.length + ' INTERNACOES',
  )

  let qtdSelecionada = dataAtendimentoFromDatabase.length
  if (qtdSelecionada <= 15) {
      let newPa :any = []

      dataAtendimentoFromDatabase.forEach(item => {
  
        if(item?.CD_HOSPITAL != null){
          newPa.push(item)
        }
      
        })
    await admission(newPa)
  } else {
    while (qtdSelecionada > 0) {
      const dataAtendimentoFromDatabase = await knex
        .select('*')
        .from(TBL_ATENDIMENTO)
        .where({ TP_STATUS: 'A' })
        .orderBy('SITUACAO_INTERNACAO', 'ASC')
        .limit(15)

        let newParam :any = []

        dataAtendimentoFromDatabase.forEach(item => {
     
          if(item?.CD_HOSPITAL != null){
            newParam.push(item)
          }
        
          })
  
        await admission(newParam)

      qtdSelecionada -= dataAtendimentoFromDatabase.length
      console.log('FALTAM ' + qtdSelecionada + ' INTERNAÇOES')
    }
  }
}

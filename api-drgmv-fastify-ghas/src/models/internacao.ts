import { AnaliseCritica } from './AnaliseCritica'
import { CondicaoAdquiridaCateterVascularCentral } from './CondicaoAdquiridaCateterVascularCentral'
import { CondicaoAdquiridaSondaVesicalDeDemora } from './CondicaoAdquiridaSondaVesicalDeDemora'
import { Rn } from './Rn'
import { AltaAdministrativa } from './altaAdministrativa'
import { CateterVascularCentral } from './cateterVascularCentral'
import { CodigoCidSecundario } from './cidSecundario'
import { CondicaoAdquirida } from './condicaoAdquirida'
import { CondicaoAdquiridaSuporteVentilatorio } from './condicaoAdquiridaSuporteVentilatorio'
import { Cti } from './cti'
import { Hospital } from './hospital'
import { Medico } from './medico'
import { MedicoProcedimento } from './medicoProcedimento'
import { Operadora } from './operadora'
import { Paciente } from './paciente'
import { PartoAdequado } from './partoAdequado'
import { Procedimento } from './procedimento'
import { SondaVesicalDeDemora } from './sondaVesicalDeDemora'
import { SuporteVentilatorio } from './suporteVentilatorio'

export class Internacao {
  private situacao: string
  private caraterInternacao: string
  private numeroRegistro: string
  private numeroAtendimento: string
  private numeroAutorizacao: string
  private dataInternacao: string
  private dataAlta: string
  private condicaoAlta: string
  private dataAutorizacao: string
  private codigoCidPrincipal: string
  private internadoOutrasVezes: string
  private reiternacao: string
  private recaida: string
  private hospital: Hospital
  private hospitais: Hospital[]
  private paciente: Paciente
  private pacientes: Paciente[]
  private medico: Medico
  private medicos: Medico[]
  private operadora: Operadora
  private operadoras: Operadora[]
  private codigoCidSecundario: CodigoCidSecundario
  private codigosCidSecundarios: CodigoCidSecundario[]
  private procedimento: Procedimento
  private procedimentos: Procedimento[]
  private cti: Cti
  private ctis: Cti[]
  private suporteVentilatorio: SuporteVentilatorio
  private suportesVentilatorios: SuporteVentilatorio[]
  private condicaoAdquirida: CondicaoAdquirida
  private condicoesAdquiridas: CondicaoAdquirida[]
  private altaAdministrativa: AltaAdministrativa
  private altasAdministrativas: AltaAdministrativa[]
  private partoAdequado: PartoAdequado
  private partosAdequados: PartoAdequado[]
  private procedencia: string
  private leito: string
  private numeroOperadora: string
  private hospitalIternacaoAnterior: string
  private acao: string
  private sondaVesicualDeDemora: SondaVesicalDeDemora
  private sondasVesicularesDeDemora: SondaVesicalDeDemora[]
  private cateterVascularCentral: CateterVascularCentral
  private cateteresVascularesCentral: CateterVascularCentral[]
  private medicoProcedimento: MedicoProcedimento
  private medicosProcedimento: MedicoProcedimento[]
  private condicaoAdquiridaCateterVascularCentral: CondicaoAdquiridaCateterVascularCentral
  private condicoesAdquiridaCateterVascularCentral: CondicaoAdquiridaCateterVascularCentral[]
  private condicaoAdquiridaSondaVesicalDeDemora: CondicaoAdquiridaSondaVesicalDeDemora
  private condicoesAdquiridaSondaVesicalDeDemora: CondicaoAdquiridaSondaVesicalDeDemora[]
  private condicaoAdquiridaSuporteVentilatorio: CondicaoAdquiridaSuporteVentilatorio
  private condicoesAdquiridaSuporteVentilatorio: CondicaoAdquiridaSuporteVentilatorio[]
  private analiseCritica: AnaliseCritica
  private analisesCritica: AnaliseCritica[]
  private rn: Rn
  private rns: Rn[]
  constructor() {
    this.rn = new Rn()
    this.rns = []
    this.analiseCritica = new AnaliseCritica()
    this.analisesCritica = []
    this.condicaoAdquiridaSuporteVentilatorio =
      new CondicaoAdquiridaSuporteVentilatorio()
    this.condicoesAdquiridaSuporteVentilatorio = []
    this.condicaoAdquiridaSondaVesicalDeDemora =
      new CondicaoAdquiridaSondaVesicalDeDemora()
    this.condicoesAdquiridaSondaVesicalDeDemora = []
    this.situacao = ''
    this.caraterInternacao = ''
    this.numeroRegistro = ''
    this.numeroAtendimento = ''
    this.numeroAutorizacao = ''
    this.dataInternacao = ''
    this.dataAlta = ''
    this.condicaoAlta = ''
    this.dataAutorizacao = ''
    this.codigoCidPrincipal = ''
    this.internadoOutrasVezes = ''
    this.reiternacao = ''
    this.recaida = ''
    this.hospital = new Hospital()
    this.hospitais = []
    this.paciente = new Paciente()
    this.pacientes = []
    this.medico = new Medico()
    this.medicos = []
    this.operadora = new Operadora()
    this.operadoras = []
    this.codigoCidSecundario = new CodigoCidSecundario()
    this.codigosCidSecundarios = []
    this.procedimento = new Procedimento()
    this.procedimentos = []
    this.cti = new Cti()
    this.ctis = []
    this.suporteVentilatorio = new SuporteVentilatorio()
    this.suportesVentilatorios = []
    this.condicaoAdquirida = new CondicaoAdquirida()
    this.condicoesAdquiridas = []
    this.altaAdministrativa = new AltaAdministrativa()
    this.altasAdministrativas = []
    this.partoAdequado = new PartoAdequado()
    this.partosAdequados = []
    this.acao = ''
    this.sondaVesicualDeDemora = new SondaVesicalDeDemora()
    this.sondasVesicularesDeDemora = []
    this.cateterVascularCentral = new CateterVascularCentral()
    this.cateteresVascularesCentral = []
    this.medicoProcedimento = new MedicoProcedimento()
    this.medicosProcedimento = []
    this.condicaoAdquiridaCateterVascularCentral =
      new CondicaoAdquiridaCateterVascularCentral()
    this.condicoesAdquiridaCateterVascularCentral = []
  }

  public addRn(rn: Rn) {
    this.rns.push(rn)
  }

  public addAnaliseCritica(analiseCritica: AnaliseCritica) {
    this.analisesCritica.push(analiseCritica)
  }

  public addCondicaoAdquiridaSuporteVentilatorio(
    condicaoAdquiridaSuporteVentilatorio: CondicaoAdquiridaSuporteVentilatorio,
  ) {
    this.condicoesAdquiridaSuporteVentilatorio.push(
      condicaoAdquiridaSuporteVentilatorio,
    )
  }

  public addCondicaoAdquiridaSondaVesicalDeDemora(
    condicaoAdquiridaSondaVesicalDeDemora: CondicaoAdquiridaSondaVesicalDeDemora,
  ) {
    this.condicoesAdquiridaSondaVesicalDeDemora.push(
      condicaoAdquiridaSondaVesicalDeDemora,
    )
  }

  public addCondicaoAdquiridaCateterVascularCentral(
    condicaoAdquiridaCateterVascularCentral: CondicaoAdquiridaCateterVascularCentral,
  ) {
    this.condicoesAdquiridaCateterVascularCentral.push(
      condicaoAdquiridaCateterVascularCentral,
    )
  }

  public addHospital(hospital: Hospital): void {
    this.hospitais.push(hospital)
  }

  public addPaciente(paciente: Paciente): void {
    this.pacientes.push(paciente)
  }

  public addOpradora(operadora: Operadora): void {
    this.operadoras.push(operadora)
  }

  public addMedico(medico: Medico): void {
    this.medicos.push(medico)
  }

  public addCodigoCidSecundario(
    codigoCidSecundario: CodigoCidSecundario,
  ): void {
    this.codigosCidSecundarios.push(codigoCidSecundario)
  }

  public addProcedimento(procedimento: Procedimento): void {
    this.procedimentos.push(procedimento)
  }

  public addCti(cti: Cti): void {
    this.ctis.push(cti)
  }

  public addSuporteVentilatorio(
    suporteVentilatorio: SuporteVentilatorio,
  ): void {
    this.suportesVentilatorios.push(suporteVentilatorio)
  }

  public addCondicaoAdquirida(condicaoAdquirida: CondicaoAdquirida): void {
    this.condicoesAdquiridas.push(condicaoAdquirida)
  }

  public addAltaAdministrativa(altaAdministrativa: AltaAdministrativa): void {
    this.altasAdministrativas.push(altaAdministrativa)
  }

  public addPartoAdequado(partoAdequado: PartoAdequado): void {
    this.partosAdequados.push(partoAdequado)
  }

  public addSondaVesicalDeDemora(
    sondaVesicalDeDemora: SondaVesicalDeDemora,
  ): void {
    this.sondasVesicularesDeDemora.push(sondaVesicalDeDemora)
  }

  public addCateterVascularCentral(
    cateterVascularCentral: CateterVascularCentral,
  ): void {
    this.cateteresVascularesCentral.push(cateterVascularCentral)
  }

  // public addMedicoProcedimento(medicoProcedimento: MedicoProcedimento): void {
  //   this.medicosProcedimento.push(medicoProcedimento)
  // }
  // ------//

  public setSituacao(situacao: string): void {
    this.situacao = situacao
  }

  public setCaraterInternacao(caraterInternacao: string): void {
    this.caraterInternacao = caraterInternacao
  }

  public setNumeroAtendimento(numeroAtendimento: string): void {
    this.numeroAtendimento = numeroAtendimento
  }

  public setNumeroAutorizacao(numeroAutorizacao: string): void {
    this.numeroAutorizacao = numeroAutorizacao
  }

  public setDataInternacao(dataInternacao: string): void {
    this.dataInternacao = dataInternacao
  }

  public setDataAlta(dataAlta: string): void {
    this.dataAlta = dataAlta
  }

  public setCondicaoAlta(condicaoAlta: string): void {
    this.condicaoAlta = condicaoAlta
  }

  public setDataAutorizacao(dataAutorizacao: string): void {
    this.dataAutorizacao = dataAutorizacao
  }

  public setCodigoCidPrincipal(codigoCidPrincipal: string): void {
    this.codigoCidPrincipal = codigoCidPrincipal
  }

  public setInternadoOutrasVezes(internadoOutrasVezes: string): void {
    this.internadoOutrasVezes = internadoOutrasVezes
  }

  public setReiternacao(reiternacao: string): void {
    this.reiternacao = reiternacao
  }

  public setRecaida(recaida: string): void {
    this.recaida = recaida
  }

  public setProcedencia(procedencia: string): void {
    this.procedencia = procedencia
  }

  public setLeito(leito: string): void {
    this.leito = leito
  }

  public setNumeroOperadora(numeroOperadora: string): void {
    this.numeroOperadora = numeroOperadora
  }

  public setNumeroRegistro(numeroRegistro: string): void {
    this.numeroRegistro = numeroRegistro
  }

  public setHospitalIternacaoAnterior(hospitalIternacaoAnterior: string): void {
    this.hospitalIternacaoAnterior = hospitalIternacaoAnterior
  }

  public setAcao(acao: string): void {
    this.acao = acao
  }

  public getData(): object {
    return {
      situacao: this.situacao,
      caraterInternacao: this.caraterInternacao,
      procedencia: this.procedencia,
      numeroOperadora: this.numeroOperadora,
      numeroRegistro: this.numeroRegistro,
      numeroAtendimento: this.numeroAtendimento,
      numeroAutorizacao: this.numeroAutorizacao,
      dataInternacao: this.dataInternacao,
      dataAlta: this.dataAlta,
      condicaoAlta: this.condicaoAlta,
      dataAutorizacao: this.dataAutorizacao,
      codigoCidPrincipal: this.codigoCidPrincipal,
      internadoOutrasVezes: this.internadoOutrasVezes,
      hospitalIternacaoAnterior: this.hospitalIternacaoAnterior,
      reiternacao: this.reiternacao,
      recaida: this.recaida,
      acao: this.acao,
      leito: this.leito,
      Hospital: this.hospitais.map((hospital) => hospital.getData()),
      Beneficiario: this.pacientes.map((paciente) => paciente.getData()), // é o meu paciente
      Operadora: this.operadoras.map((operadora) => operadora.getData()),
      Medico: this.medicos.map((medico) => medico.getData()),
      CidSecundario: this.codigosCidSecundarios.map((codigoCidSecundario) =>
        codigoCidSecundario.getData(),
      ),
      Procedimento: this.procedimentos.map((procedimento) =>
        procedimento.getData(),
      ),
      CondicaoAdquirida: this.condicoesAdquiridas.map((condicaoAdquirida) =>
        condicaoAdquirida.getData(),
      ),
      Cti: this.ctis.map((cti) => cti.getData()),
      PartoAdequado: this.partosAdequados.map((partoAdequado) =>
        partoAdequado.getData(),
      ),
      CondicaoAdquiridaCateterVascularCentral:
        this.condicoesAdquiridaCateterVascularCentral.map(
          (condicaoAdquiridaCateterVascularCentral) =>
            condicaoAdquiridaCateterVascularCentral.getData(),
        ),
      CondicaoAdquiridaSondaVesicalDeDemora:
        this.condicoesAdquiridaSondaVesicalDeDemora.map(
          (condicaoAdquiridaSondaVesicalDeDemora) =>
            condicaoAdquiridaSondaVesicalDeDemora.getData(),
        ),
      CondicaoAdquiridaSuporteVentilatorio:
        this.condicoesAdquiridaSuporteVentilatorio.map(
          (condicaoAdquiridaSuporteVentilatorio) =>
            condicaoAdquiridaSuporteVentilatorio.getData(),
        ),
      // MedicoProcedimento: this.medicosProcedimento.map((medicoProcedimento) =>
      //   medicoProcedimento.getData(),
      // ),
      AnaliseCritica: this.analisesCritica.map((analiseCritica) =>
        analiseCritica.getData(),
      ),
      Rn: this.rns.map((rn) => rn.getData()),
      SuporteVentilatorio: this.suportesVentilatorios.map(
        (suporteVentilatorio) => suporteVentilatorio.getData(),
      ),
      SondaVesicalDeDemora: this.sondasVesicularesDeDemora.map(
        (sondaVesicualDeDemora) => sondaVesicualDeDemora.getData(),
      ),
      CateterVascularCentral: this.cateteresVascularesCentral.map(
        (cateterVascularCentral) => cateterVascularCentral.getData(),
      ),
    }
  }
}

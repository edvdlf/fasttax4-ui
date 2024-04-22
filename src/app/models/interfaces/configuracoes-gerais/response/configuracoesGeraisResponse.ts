export interface ConfiguracoesGeraisResponse {
  id: number,
  ambiente: string;
  nivelLog: string;
  linguagem: string;
  ged: string;
  trabalhos: string;
  painelControle: string;
  validador: string;
  agruparPorStatus: string;
  diratorioAgrupamento: string;
  rlProvedor: string;
  portaProvedor: string;
  dominio: string;
  useLdap: boolean;
  hostName: string;
  porta: string;
  ssl: boolean;
  remetente: string;
  usuario: string;
  senha: string;
  senhaA3: string;
  validacao: boolean;
  assinatura: boolean;
  transmissao: boolean;
  excluirContabilidade: boolean;
  validacaoAutomatica: string;
  alertaEmail: string;
  oracleWsdl: string;
  edmWsdl: string;
  validadorWsdl: string;
  autoGuiWsdl: string;
  localizacaoCertificado: string;
  senhaCertificado: string;

}


export  interface ExecuteFluxoRequest{
  id: string;
  nome: string;
  descricao: string;
  dataCriacao: string;
  contemVinculo: boolean;
  dataUltimaExecucao: Date;
  agendadoPara: Date;

}

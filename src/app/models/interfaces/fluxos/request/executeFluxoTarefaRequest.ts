export  interface ExecuteFluxoTarefaRequest{
  id: string;
  idFluxo: string;
  obrigacao: string;
  descricao: string;
  contemAgendamento: boolean;
  dataUltimaExecucao: string;
  dataProximaExecucao: string;

}

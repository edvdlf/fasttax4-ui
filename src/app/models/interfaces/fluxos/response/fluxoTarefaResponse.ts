export  interface FluxoTarefaResponse{
  id: number;
  idFluxo: number;
  obrigacao: string;
  descricao: string;
  contemAgendamento: boolean;
  dataUltimaExecucao: string;
  dataProximaExecucao: string;

}

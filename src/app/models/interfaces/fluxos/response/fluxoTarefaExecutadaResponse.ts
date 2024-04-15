export  interface FluxoTarefaExecutadaResponse{
  id: number;
  idFluxo: number;
  obrigacao: string;
  contemAgendamento: boolean;
  dataUltimaExecucao: string;
  dataProximaExecucao: string;
  nomeFluxo: string;
  periodo: string;
}


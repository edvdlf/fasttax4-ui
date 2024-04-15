export  interface FluxoTarefaRequest{

  idFluxo: string;
  idTarefa: number;
  obrigacao: string;
  periodo: string;
  contemAgendamento: boolean;
  dataUltimaExecucao: string;
  dataProximaExecucao: string;

}

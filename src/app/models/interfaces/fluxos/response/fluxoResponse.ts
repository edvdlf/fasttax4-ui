import { FluxoTarefaResponse } from "./fluxoTarefaResponse";

export  interface FluxoResponse{
  id: string;
  nome: string;
  descricao: string;
  dataCriacao: string;
  contemVinculo: boolean;
  dataUltimaExecucao: Date;
  agendadoPara: Date;
  //tarefas: FluxoTarefaResponse;
}

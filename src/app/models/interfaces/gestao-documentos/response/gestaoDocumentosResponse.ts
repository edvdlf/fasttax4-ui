export interface GestaoDocumentosResponse {
  id: number;
  nomeArquivo: string;
  caminhoArquivo: string;
  tipoArquivo: string;
  dataCriacao: Date;
  ano: string;
  mes: string;
  dataDownload: Date;
  estabelecimento: string;
  empresa: string;

}


export interface PermissoesAcessoRequest {
    idModulo: number;
    idUsuario: number;
    permTotal: boolean;
    adicionar: boolean;
    visualizar: boolean;
    editar: boolean;
    excluir: boolean;

}

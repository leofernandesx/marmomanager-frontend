export interface Pedido {
    id: number;
    orcamento_id: number;
    status: String;
    data_prevista_entrega: string;
    criado_em: string;
    valor_total: number;
    cliente_id: number;
  }
export interface Pagamento {
    id: number;
    data_pagamento: string;
    forma_pagamento: String;
    status: string;
    valor_pago: number;
    pedido_id: number;
    valor: number;
    metodo_pagamento: string;
    criado_em: string;
  }
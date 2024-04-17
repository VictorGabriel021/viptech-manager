interface ICepData {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}

export interface ICepDataResponse extends ICepData {
  erro?: boolean;
}

export interface ICepService {
  getCepInfo: (cep: string) => Promise<ICepDataResponse>;
}

import { ICepService, ICepDataResponse } from "./interfaces";

const CepService = (cep: string): ICepService => {
  const getCepInfo = async (): Promise<ICepDataResponse> => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data: ICepDataResponse = await response.json();

    return data;
  };

  return {
    getCepInfo,
  };
};

export default CepService;

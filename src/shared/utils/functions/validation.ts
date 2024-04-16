export type validCpfProp = string | null | undefined;

export const validCpf = (strCPF: validCpfProp) => {
  if (strCPF) {
    strCPF = strCPF.replace(/[^\d]+/g, "");
    if (strCPF.length !== 11 || /^(\d)\1+$/.test(strCPF)) return false;
    let soma = 0,
      resto;
    for (let i = 1; i <= 9; i++)
      soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(strCPF.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++)
      soma = soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }
  return false;
};

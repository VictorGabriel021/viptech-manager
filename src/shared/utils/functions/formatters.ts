export const formatCPF = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const formatRG = (value: string) => {
  return value
    .replace(/\W/g, "")
    .replace(/^(\w{2})(\w)/, "$1.$2")
    .replace(/^(\w{2})\.(\w{3})(\w)/, "$1.$2.$3")
    .replace(/\.(\w{3})(\w)/, ".$1-$2")
    .toUpperCase();
};

export const formatPhone = (value: string) => {
  const formattedNumber = value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "($1) $2");

  if (value.replace(/[^0-9]/g, "").length === 10) {
    return formattedNumber.replace(/(\d{4})(\d)/, "$1-$2");
  } else {
    return formattedNumber.replace(/(\d{5})(\d)/, "$1-$2");
  }
};

export const formatCEP = (value: string) => {
  return value.replace(/\D/g, "").replace(/^(\d{5})(\d)/, "$1-$2");
};
export const getCleanDocumentNumber = (document: string | undefined) => {
  const cleanRegex = /[^\d]+/g;

  if (document) return document.replace(cleanRegex, "");
  return "";
};

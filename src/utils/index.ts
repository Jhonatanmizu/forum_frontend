export const formatStringToCpf = (value: string = "") => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return value;
};

export const formatDate = (value: string) => {
  if (!value) return "";
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d{4})$/, "$1/$2");
};

export const isValidCPF = (strCPF: string): boolean => {
  strCPF = strCPF.replace(/\D/g, "");
  if (strCPF.length !== 11 || /^(\d)\1{10}$/.test(strCPF)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(strCPF.charAt(i)) * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }
  if (remainder !== parseInt(strCPF.charAt(9))) {
    return false;
  }

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(strCPF.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }
  if (remainder !== parseInt(strCPF.charAt(10))) {
    return false;
  }

  return true;
};

export const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

export const removeSpecialChars = (value: string) => {
  return value.replace(/[^a-zA-Z0-9 ]/g, "");
};

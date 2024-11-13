export const handleNameChange = (
  event: React.ChangeEvent<HTMLInputElement>
): string => {
  return event.target.value.trim();
};

export const handleNumberChange = (
  event: React.ChangeEvent<HTMLInputElement>
): { formattedNumber: string; isValid: boolean; length: number } => {
  const numbValue: string = event.target.value.replace(/\s+/g, "");
  let formattedNumb: string = "";

  for (let i = 0; i < numbValue.length; i = i + 4) {
    formattedNumb = formattedNumb + numbValue.slice(i, i + 4) + " ";
  }

  formattedNumb = formattedNumb.trim();
  const isValid = !isNaN(Number(numbValue));

  return {
    formattedNumber: formattedNumb,
    isValid,
    length: numbValue.length,
  };
};

export const handleDateChange = (
  event: React.ChangeEvent<HTMLInputElement>
): { dateValue: string; isValid: boolean; length: number } => {
  const dateValue = event.target.value.trim();
  const length = dateValue.length;
  const isValid = !isNaN(Number(dateValue));
  return {
    dateValue,
    length,
    isValid,
  };
};

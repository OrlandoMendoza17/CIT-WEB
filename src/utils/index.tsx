export const stringListFrom = (array: string[]): string => {
  const formatter = new Intl.ListFormat('es', { style: 'long', type: 'conjunction' });
  return formatter.format(array)
}
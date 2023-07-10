export const stringListFrom = (array: string[]): string => {
  const formatter = new Intl.ListFormat('es', { style: 'long', type: 'conjunction' });
  return formatter.format(array)
}

export const getImageUrl = (cover: string | null): string => {
  return cover ? `${process.env.NEXT_PUBLIC_API}/storage/v1/object/public/post-covers/${cover}` : ""
}
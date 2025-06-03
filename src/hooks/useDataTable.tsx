export function useDataTable<T extends Record<string, any>>(data: T[]) {
  const columns = data.length > 0 ? Object.keys(data[0]) : [];
  return {
    data,
    columns,
  };
}

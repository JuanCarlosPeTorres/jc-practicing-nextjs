export const fetchSuppliers = async () => {
  const response = await fetch("/api/suppliers");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

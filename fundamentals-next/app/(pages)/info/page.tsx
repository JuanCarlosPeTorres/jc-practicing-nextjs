"use client";

import { fetchSuppliers } from "@/app/data/api-suppliers";
import { Suppliers } from "@/app/types/api-types";
import { useQuery } from "@tanstack/react-query";

export default function InfoPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["suppliers"],
    queryFn: fetchSuppliers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // console.log(JSON.stringify(data));

  return (
    <div>
      {data.map((supplier: Suppliers) => {
        return (
          <div key={supplier.id} className="flex flex-row wrap p-4">
            <div className="space-y-4">
              <p>{supplier.name}</p>
              <p>{supplier.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

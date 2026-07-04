import React, { createContext, useContext, useState } from "react";

export type Product = {
  id: string;
  naam: string;
  locatie: string;
  categorie: string;
  hoeveelheid: string;
  eenheid: string;
  houdbaarTot: string;
  extraDagen: string;
  waarschuwingDagen: string;
};

type ProductContextType = {
  producten: Product[];
  addProduct: (product: Product) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [producten, setProducten] = useState<Product[]>([]);

  function addProduct(product: Product) {
    setProducten((huidigeProducten) => [...huidigeProducten, product]);
  }

  return (
    <ProductContext.Provider value={{ producten, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProducts moet binnen ProductProvider gebruikt worden");
  }

  return context;
}
import React, { createContext, useContext, useState } from "react";

export type ProductDefinition = {
  id: string;
  naam: string;
  categorie: string;
  standaardLocatie: string;
  eenheid: string;
  datumType: "THT" | "TGT";
  extraDagen: string;
  waarschuwingDagen: string;
};

export type StockItem = {
  id: string;
  productNaam: string;
  hoeveelheid: string;
  eenheid: string;
  locatie: string;
  categorie: string;
  houdbaarTot: string;
  extraDagen: string;
  waarschuwingDagen: string;
};

type ProductContextType = {
  producten: ProductDefinition[];
  voorraad: StockItem[];
  addProductDefinition: (product: ProductDefinition) => void;
  addStockItem: (item: StockItem) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [producten, setProducten] = useState<ProductDefinition[]>([]);
  const [voorraad, setVoorraad] = useState<StockItem[]>([]);

  function addProductDefinition(product: ProductDefinition) {
    setProducten((current) => [...current, product]);
  }

  function addStockItem(item: StockItem) {
    setVoorraad((current) => [...current, item]);
  }

  return (
    <ProductContext.Provider
      value={{ producten, voorraad, addProductDefinition, addStockItem }}
    >
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
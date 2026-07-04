export type DateType = "THT" | "TGT";

export interface Product {
  id: string;

  naam: string;

  locatie: string;

  categorie: string;

  hoeveelheid: number;

  eenheid: string;

  houdbaarTot: string;

  datumType: DateType;

  extraDagen: number;

  waarschuwingDagen: number;

  opmerking?: string;
}
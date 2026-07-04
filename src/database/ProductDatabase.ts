import { Product } from "../models/Product";

const producten: Product[] = [];

export function getProducten() {
  return producten;
}

export function voegProductToe(product: Product) {
  producten.push(product);
}
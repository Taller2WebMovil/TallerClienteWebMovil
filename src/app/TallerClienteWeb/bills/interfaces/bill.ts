import { ProductDetail } from "./product-detail";

export interface Bill {
    id: number;
    fechaCompra: string;
    precioTotal: number;
    productos: ProductDetail[];
}

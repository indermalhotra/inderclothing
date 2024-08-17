import { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/ProductCard";
import "./Shop.scss"


function Shop() {
    const CTXproduct = useContext(ProductContext);
    console.log(CTXproduct)
    const dataDivs = CTXproduct.products.map(
        product => <ProductCard product={product} key={product.id}/>
    );
    return (
        <div className="product-container">
            {dataDivs}
        </div>
    )
}

export default Shop

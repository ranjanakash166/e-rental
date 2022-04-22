import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const { products } = CartState();

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>Products</span>
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;

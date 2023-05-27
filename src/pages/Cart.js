import { CartCard } from "../component/CartCard";
import { useCart } from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";

const Cart = () => {
  const { total, cartList } = useCart();
  console.log(total);
  useTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {cartList.length} / ${total}
        </h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Cart;

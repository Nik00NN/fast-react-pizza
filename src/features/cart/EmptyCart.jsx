import LinkButton from "../../ui/LinkButton";

const EmptyCart = () => {
  return (
    <div className="px-6 py-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-6 font-semibold">
        Your cart is empty. Start adding some pizzas :)
      </p>
    </div>
  );
};

export default EmptyCart;

const Card = () => {
  const menuItems = [
    {
      name: "Focaccia",
      description: "Bread with Italian olive oil and rosemary",
      quantity: 6,
      image:
        "https://media.istockphoto.com/id/526129858/photo/artisan-focaccia-bread-pizza-with-cherry-tomatoes-pesto-rosemary.jpg?s=612x612&w=0&k=20&c=DwdtZ4-oz3m6ArbX01igAoeIQ2wKPkGRdfiUC4cSWXc=",
    },
    {
      name: "Pizza Margherita",
      description: "Tomato and mozzarella",
      quantity: 18,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZT-mMFzbCHQ1IC81oKT1oNlK445qt_JNgQ&s",
    },
    {
      name: "Pizza Spinaci",
      description: "Tomato, mozzarella, spinach, and ricotta cheese",
      quantity: 12,
      image:
        "https://media.istockphoto.com/id/180215031/photo/spinach-pizza.jpg?s=612x612&w=0&k=20&c=JuC4UVpj1dhwHgPiU9rABsh4pi7CoShP46AQ9PmVOAg=",
    },
    {
      name: "Pizza Funghi",
      description: "Tomato, mozzarella, mushrooms, and onion",
      quantity: 12,
      image:
        "https://static.vecteezy.com/system/resources/previews/049/139/376/non_2x/gourmet-pizza-with-grilled-chicken-mushroom-and-herbs-perfect-for-menus-food-blogs-social-media-and-advertisements-photo.jpg",
    },
    {
      name: "Pizza Salamino",
      description: "Tomato, mozzarella, and pepperoni",
      quantity: 0,
      soldOut: true,
      image:
        "https://cdn.tasteatlas.com//images/dishes/1501b7a18cab4f97b3cb834157712052.jpg?w=375&h=280",
    },
    {
      name: "Pizza Prosciutto",
      description: "Tomato, mozzarella, ham, arugula, and burrata cheese",
      quantity: 18,
      image:
        "https://media.istockphoto.com/id/1313124969/photo/pizza-with-prosciutto-and-arugula-on-white-background.jpg?s=612x612&w=0&k=20&c=Y3on7EFfO1fBDRdLT0ik0gzb-lamlg0zOt48cHKS6dM=",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center w-full max-w-4xl mx-auto mt-3 px-4">
      {menuItems.map((item) => (
        <div
          className="flex items-center gap-4 py-4 w-full sm:w-[38%]"
        >
          <img
            src={item.image}
            alt={item.name}
            className={`w-20 h-20 object-cover rounded ${
              item.quantity === 0 ? "grayscale" : ""
            }`}
          />
          <div className="text-xs leading-5">
            <h1 className=" text-lg font-mono">{item.name}</h1>
            <p className="font-mono text-gray-600">{item.description}</p>
            <p className="text-black font-medium">
              {item.quantity === 0 ? "Sold Out" : `Quantity: ${item.quantity}`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default Card;

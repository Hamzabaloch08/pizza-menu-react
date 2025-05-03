import Card from "./components/Card";

const App = () => {
  return (
      <div className="flex justify-center flex-col items-center mt-5 px-4">
        <h1 className="text-yellow-400 text-3xl max-md:text-2xl max-sm:text-lg  uppercase tracking-widest font-light">
          - fast react pizza co. -
        </h1>
        <div className="border-y-2 border-black mt-7">
          <h1 className="text-2xl max-sm:text-sm max-md:text-xl uppercase font-medium text-center">
            our menu
          </h1>
        </div>
        <p className="font-mono w-full sm:w-[60%] md:w-[50%] text-center mt-6 text-sm max-md:text-xs">
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
        <Card />
        <p className="text-sm mt-2 font-mono text-center">We're open untill 22:00. Come visit us or order online.</p>
        <button className="bg-yellow-400 font-mono text-sm py-2 px-5 mt-4 cursor-pointer active:bg-yellow-500">Order now</button>
      </div>
  );
};

export default App;

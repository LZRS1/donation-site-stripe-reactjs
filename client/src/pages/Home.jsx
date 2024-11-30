import DonationForm from "../components/DonationForm";
import DonateImg from "../images/logo-1.png";
const Home = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 place-content-center">
      <div
        className="bg-cover bg-no-repeat bg-center rounded-lg hidden xl:block"
        style={{
          backgroundImage: `url(${DonateImg})`,
        }}
      ></div>
      <div className="text-center mx-auto max-w-screen-sm">
      <h1 className="text-4xl font-extrabold mb-8 dark:bg-clip-text dark:text-transparent" style={{ backgroundImage: "linear-gradient(90.3deg, rgb(255, 255, 255) 3%, rgb(235, 158, 98) 34.6%, rgb(177, 10, 10) 63.7%, rgb(0, 0, 0) 102%)" }}>
      Done a nuestra comunidad
</h1>

        <p className="mb-5">
        Su donación nos ayuda a ofrecer y servir mejores servicios.
          <br className="hidden sm:block" />
          Su contribución, por grande o pequeña que sea, es valiosa para nuestro futuro.
        </p>
        <DonationForm />
      </div>
    </div>
  );
};

export default Home;

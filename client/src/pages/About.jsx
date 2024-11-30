const About = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-center">
      <div className="col-span-1 sm:col-span-2">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Sobre nosotros</h1>

        <p className="mb-5">
          L4ZARUS CORP es una empresa innovadora que ofrece una amplia gama de productos y servicios a precios increíblemente bajos. Nos especializamos en la venta de licencias de software, juegos, dominios, cuentas premium, suscripciones, cuentas de juegos, monedas de juegos y criptomonedas. Además, brindamos soluciones completas para páginas web y servicios de marketing digital.

          Nuestro objetivo es proporcionar a nuestros clientes acceso a productos de alta calidad y servicios profesionales sin que tengan que pagar precios elevados. Con L4ZARUS CORP, puedes obtener todo lo que necesitas para mejorar tu experiencia digital, optimizar tu negocio o simplemente disfrutar del mejor entretenimiento, todo a un costo accesible. ¡Ven y descubre cómo podemos ayudarte a alcanzar tus metas con la mejor relación calidad-precio!
        </p>
      </div>

      {/* Contenedor centrado para la imagen */}
      <div className="col-span-1 sm:col-span-2 flex justify-center">
        <img
          src="https://i.ibb.co/7NX9kC0/Orange-Phoenix-Animal-Gaming-Logo.png"
          alt="Orange-Phoenix-Animal-Gaming-Logo"
          className="max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>
    </div>
  );
};

export default About;

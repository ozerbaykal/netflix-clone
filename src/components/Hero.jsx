const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold">Garfield </h1>
        <p>
          Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat,
          is about to have a wild outdoor adventure! After an unexpected reunion
          with his long-lost father – scruffy street cat Vic – Garfield and his
          canine friend Odie are forced from their perfectly pampered life into
          joining Vic in a hilarious, high-stakes heist.
        </p>
        <p>
          <span>IMDB :</span>
          <span className="text-yellow-400 ms-2 font-semibold"> 7.4</span>
        </p>
        <div className="flex gap-5">
          <button className="bg-red-600 p-2 rounded hover:bg-red-700">
            Filmi İzle
          </button>
          <button className="bg-blue-600 p-2 rounded hover:bg-blue-700">
            Listeye Ekle
          </button>
        </div>
      </div>
      <div className="w-500">
        <img
          src="https://image.tmdb.org/t/p/original/xYduFGuch9OwbCOEUiamml18ZoB.jpg"
          alt=""
          className="hero-img my-4 max-h-[300px] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;

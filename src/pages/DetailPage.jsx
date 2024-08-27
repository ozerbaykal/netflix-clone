import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Loader from "../components/Loader";
import { baseImgUrl } from "../constants/index";
import DetailDisplay from "../components/DetailDisplay";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ActorCard from "../components/ActorCard";

const DetailPage = () => {
  const [movie, SetMovie] = useState(null);
  const [error, SetError] = useState(null);
  //url den gelenfilmin id sini almak için useParams kullandık
  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: "credits,videos",
    }
    api
      // URl den gelen id ye göre filmin detayını aldık
      .get(`/movie/${id}`,{params})
      .then((res) => SetMovie(res.data))
      //hata olursa state e aktardık
      .catch((err) => SetError(err.message));
  }, []);

  return (
    <div>
      {!movie ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          {/* üst alan */}
          <div className="relative h-[20vh]">
            <img
              src={baseImgUrl + movie.backdrop_path}
              className=" h-full w-full object-cover"
              alt=""
            />
            <div className="absolute bg-black bg-opacity-50 inset-0 grid place-items-center">
              <h2 className="md-text-3xl text-2xl font-semibold">
                {movie.title}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 my-10">
            <div>
              <DetailDisplay title="Kategoriler" data={movie.genres} />

              <DetailDisplay title={"Konuşulan Diller"} data={movie.spoken_languages}/>
              <DetailDisplay title="Yapımcı Şirketler" data={movie.production_companies} />
              <DetailDisplay title="Yapımcı Ülkeler" data={movie.production_countries} />
            </div>
            <div className="flex flex-col gap-2">
            <p>{movie.overview}</p>
            <p>
              <span>Bütçe :</span>
              <span className="text-green-500 ms-2">${millify(movie.budget)}</span>
            </p>
            <p>
              <span>Hasılat :</span>
              <span className="text-green-500 ms-2">${millify(movie.revenue)}</span>
            </p>
            </div>
          </div>

          <div>
            <Splide
            options={{
              pagination: false,
          autoWidth: true,
          lazyLoad: true,

            }}
            >
              {movie?.credits.cast.map((actor,i)=>(
                <SplideSlide key={i}>
                  <ActorCard  actor={actor}/>
                </SplideSlide>

              ))}

            </Splide>
            
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;

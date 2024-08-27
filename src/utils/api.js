import axios from "axios";

export  default axios.create({

    baseURL:"https://api.themoviedb.org/3",
    //yapacağımız isteklere eklenilecek olan headerlar
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        
      },
      // bütün yapacağımız api isteklerinde gönderilcek olan parametre
      params: {language: 'tr'},

})

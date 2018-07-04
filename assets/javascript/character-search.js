import axios from "axios";
import md5 from "md5";

export default name => {
  const ts = new Date().getTime();
  const publicKey = "2fff075ddfa138a316ccb4a90c088b34";
  const privateKey = "18afb16cbc7ea935b10b7d9b3293e569a3fe421f";
  const heroName = name;

  const hash = md5(`&{ts}${privateKey}${publicKey}`);

  const instance = axios.create({
    baseURL: `https://gateway.marvel.com:443/v1/public/characters?name=${heroName}&apikey=${publicKey}&hash=${hash}`,
    timeout: 10000
  });

  instance
    .get()
    .then(response => console.log(response.data.data.results))
    .catch(error => console.log(error));
};

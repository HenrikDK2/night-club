async function fetchFunc(ressource, options) {
  const data = await fetch(
    "https://night-club-api.herokuapp.com/" + ressource,
    options
  ).then((res) => res.json());
  return data;
}

export default fetchFunc;

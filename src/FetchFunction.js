async function fetchFunc(ressource, options) {
  const data = await fetch(
    "https://night-club-api.herokuapp.com/" + ressource,
    options
  ).then((res) => res.json());
  if (data === null) {
    return await reset(ressource, options);
  } else {
    return data;
  }
}

async function reset(ressource, options) {
  await fetch("https://night-club-api.herokuapp.com/reset");
  return await fetchFunc(ressource, options);
}

export default fetchFunc;

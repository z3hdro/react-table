export default async function fetchData(setData) {
  // eslint-disable-next-line no-undef
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  res
    .json()
    .then((data) => {
      console.log(data);
      setData(data);
    })
    .catch((error) => console.log(error));
}

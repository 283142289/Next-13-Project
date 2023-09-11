// Fetch dummy data
const getData = async () => {
  const res = await fetch('https://dummyjson.com/products');
  return res.json();
};

const ServerComponent = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div>
      <h1>Server Component</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default ServerComponent;
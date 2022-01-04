export default function City(props) {
  const { setCity, fetch } = props;
  return (
    <>
      <h1>Weather of City</h1>
      <img src="/icons/cloudy-night.svg" alt="" />
      <form className="search" onSubmit={fetch}>
        <label>
          City:
          <input
            type="text"
            name=""
            id=""
            placeholder="Type City"
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default function SearchBar({ onSearch }) {
  const handlSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const InputValue = form.elements.search.value;
    if (InputValue.trim() === "") {
      alert("No data");
      form.reset();
      return;
    }
    onSearch(InputValue);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handlSubmit}>
        <input
          name='search'
          type='text'
          autocomplete='off'
          autofocus
          placeholder='Search images and photos'
        />
        <button type='submit'>Search</button>
      </form>
    </header>
  );
}

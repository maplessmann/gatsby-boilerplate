import './index.scss'

const SearchBox = ({ onSearch }) => {
  return (
    <form action="" className="search-box" onSubmit={onSearch}>
      <label className="label" htmlFor="username">
        Find the GitHub profile @
      </label>
      <input
        className="input"
        id="username"
        type="text"
        placeholder="maplessmann"
        autoComplete="off"
        spellcheck="false"
      />
    </form>
  )
}

export default SearchBox

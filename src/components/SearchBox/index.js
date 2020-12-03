import './index.scss'

const SearchBox = ({ onSearch }) => {
  return (
    <form action="" className="search-box" onSubmit={onSearch}>
      <label className="label" htmlFor="username">
        Find this Github profile @
      </label>
      <input
        className="input"
        id="username"
        type="text"
        placeholder="maplessmann"
        autoComplete="off"
        spellCheck="false"
      />
    </form>
  )
}

export default SearchBox

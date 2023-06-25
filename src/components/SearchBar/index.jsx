import { useState } from "react";
import { StyledSearchBar } from "./styles";
import { useRouter } from "next/router";

const SearchBar = ({ placeholder, type }) => {
  const [searchTerm, SetSearchTerm] = useState();
  const router = useRouter();

  const makeSearchTag = (e) => {
    e.preventDefault();

    router.push({
      pathname: "/tags",
      query: {
        search: searchTerm,
      },
    });
  };

  return (
    <StyledSearchBar onSubmit={(e) => {
      if(type == 'tag'){
        makeSearchTag(e)
      }
    }}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => SetSearchTerm(e.target.value)}
      />
      <span className="search-icon" onClick={(e) => makeSearchTag(e)}>
        <svg class="svgIcon-use" width="30" height="40" viewbox="0 -5 28 15">
          <path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path>
        </svg>
      </span>
    </StyledSearchBar>
  );
};

export default SearchBar;

import SearchBar from "@/components/SearchBar"
import TagsList from "@/components/TagsList"

function Tags(){
  return(
    <>
      <SearchBar placeholder="Pesquise o nome da TAG" />
      <TagsList />
    </>
  )
}

export default Tags
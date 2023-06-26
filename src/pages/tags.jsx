import SearchBar from "@/components/SearchBar"
import TagsList from "@/components/TagsList"
import { useRouter } from 'next/router';
import cookie from 'js-cookie'
import { useEffect} from "react";

function Tags(){
  const router = useRouter()

  useEffect(() => {
    if(!cookie.get('myCookie')){
      router.push('/')
    }
  }, [cookie.get('myCookie')])

  return(
    <>
      <SearchBar placeholder="Pesquise o nome da TAG" type="tag"/>
      <TagsList />
    </>
  )
}

export default Tags
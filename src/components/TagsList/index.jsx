import { useEffect, useState } from "react";
import { StyledTagsList, TagCard } from "./styles";
import axios from "axios";
import { useRouter } from "next/router";
import Button from "../Button";
import cookie from "js-cookie";


const TagsList = () => {
  const itemsByPage = 4
  const router = useRouter()
  const { page, search } = router.query
  const [tags, setTags] = useState()
  const [totalPages, setTotalPages] = useState()
  const [MyCookie, setMyCookie] = useState();

  useEffect(() => {
    setMyCookie(cookie?.get("myCookie"));
  }, [cookie?.get("myCookie")]);

  useEffect(() => {
    if(!page && !search){
      router.push({
        pathname: "/tags",
        query: {
          page: 1
        },
      });
    }
    const fetchData = async () => {
      const url = "http://localhost:8080/api/tag/v1.1/paginated-desc/" + page + "/" + itemsByPage
      try {
        const response = await axios.get(url)
        console.log(response.data)
        setTags(response?.data?.tagDtos)
        setTotalPages(response?.data?.maxResults)
      } catch (error) {
        console.log("error", error)
      }
    };

    const searchTag = async () => {
      try {
        const response = await axios.post("/api/pesquisa-tag-nome", {
          MyCookie,
          search
        });
        
        setTags(response?.data)
      } catch (error){
        console.log(error)
      }
    }

    if(search){
      searchTag()
    }else{
      fetchData()
    }
    
  }, [page, search])

  return (
    <StyledTagsList>
      <div class="taghead">
        <p>Nome da TAG</p>
        <p>Visualizar filtro</p>
      </div>

      <div class="tagcontent">
        {tags?.map((item) => {
          return (
            <TagCard>
              <p>{item.nome}</p>
              <div class="viewcontainer">
                <img src="view.png" alt="" />
              </div>
            </TagCard>
          )
        })}
      </div>

      <div class="paginationcontainer">
        {!search && page && page < totalPages && <Button link={`tags?page=${parseInt(page) + 1}`} title="Ver mais" />}
        {!search && !page && <Button link={`/tags?page=2`} title="Ver mais" />}
        {search && <Button link="/tags?page=1" title="Voltar" />}
      </div>
    </StyledTagsList>
  );
};

export default TagsList;

import { useEffect, useState } from "react";
import { StyledTagsList, TagCard, TagsInfo } from "./styles";
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
  const [tagsSelecionadas, setTagsSelecionadas] = useState();
  const [limiteTag, setLimiteTag ] = useState(0)

  useEffect(() => {
    setMyCookie(cookie?.get("myCookie"));
  }, [cookie?.get("myCookie")]);

  useEffect(() => {
    
    const fetchData = async () => {
      const url = "http://localhost:8080/api/tag/v1.1/paginated-desc/" + (page || 1) + "/" + itemsByPage
      try {
        const response = await axios.get(url)
        
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


  useEffect(() => {
    if(!tagsSelecionadas && cookie.get('tags')){
      setTagsSelecionadas(cookie.get('tags').split(','))
    }
  }, [tagsSelecionadas])


  console.log(tagsSelecionadas)

  const geraLink = () => {
    const tags = tagsSelecionadas?.join('+')
    const url = "/post-by-tag?page=1&tag=" + tags

    return url
  }

  const toogleTag = (tag) => {
    if(tagsSelecionadas.length < 5){
      setLimiteTag(0)
      if(tagsSelecionadas && !tagsSelecionadas.includes(tag) && tagsSelecionadas != undefined){
        const newTags = [...tagsSelecionadas, tag];
        setTagsSelecionadas(newTags)
      }else if(!tagsSelecionadas?.includes(tag)){
        setTagsSelecionadas([tag.toString()])
      }
    }else{
      setLimiteTag(1)
    }
    
    if(tagsSelecionadas?.includes(tag)){
      setLimiteTag(0)

      const newTags = tagsSelecionadas.filter((item) => item !== tag);
      setTagsSelecionadas(newTags)
    }

    cookie.set('tags', tagsSelecionadas)
  }

  return (
    <StyledTagsList>
      <div class="taghead">
        <p>Nome da TAG</p>
        <p>Quantidade de posts</p>
        <p>Visualizar filtro</p>
      </div>

      <div class="tagcontent">
        {tags?.map((item) => {
          return (
            <TagCard className={tagsSelecionadas.includes(item.nome) ? 'active' : ''}>
              <p className="tagName">{item?.nome}</p>
              <p className="tagQt">{item?.qtdePosts}</p>
              <div class="viewcontainer" onClick={() => toogleTag(item?.nome)} >
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
      <TagsInfo>
        <div className="tag-info-card">
          <div className="tag-info-card-head">Tags fixadas</div>
          <div className="tag-info-card-body">
            <p className={limiteTag == 1 ? 'alert active' : 'alert'}>Só é possível fixar até 5 tags</p>
            <div className="tags-selecionadas-container">
              {tagsSelecionadas?.map(botao => {
                return <button className="tagbutton">{botao}</button>
              })}
            </div>
            <Button title="Pesquisar posts" link={geraLink()} />
          </div>
        </div>
      </TagsInfo>
    </StyledTagsList>
  );
};

export default TagsList;

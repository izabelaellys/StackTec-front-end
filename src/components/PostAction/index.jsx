import { StyledPostAction } from "./styles";
import React, { useContext, useState } from 'react';
import { HomeContext } from '../Context/HomeContext';
import Button from "../Button";

const PostAction = () => {
  const {setOrderBy} = useContext(HomeContext)
  const [activeButton, setActiveButton] = useState(1)

  return (
    <StyledPostAction>
      <div class="filter">
        <p>Filtrar: </p>
        <button 
          class={activeButton == 1 ? 'filterbutton active' : 'filterbutton'} 
          onClick={() => {
            setActiveButton(1)
            setOrderBy('recentes')
          }}
        >Recentes</button>
        <button 
          class={activeButton == 2 ? 'filterbutton active' : 'filterbutton'}
          onClick={() => {
            setActiveButton(2)
            setOrderBy('maisvotados')
          }}
        >
          Mais votados
        </button>
        <button 
          class={activeButton == 3 ? 'filterbutton active' : 'filterbutton'}
          onClick={() => {
            setActiveButton(3)
            setOrderBy('antigos')
          }}
        >
          Antigos
        </button>
      </div>
      <Button link="/editor" title="Faça uma pergunta" />
    </StyledPostAction>
  )
}

export default PostAction
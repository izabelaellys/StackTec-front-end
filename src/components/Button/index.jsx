import { ButtonStyled } from "./styles";


const Button = ({link, target = '', title}) => {
  return(
    <ButtonStyled href={link} target={target} className="btn">
      {title}
    </ButtonStyled>
  )
}

export default Button
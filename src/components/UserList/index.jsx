import { useEffect, useState } from "react";
import { StyledUserList } from "./styles";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import Button from "../Button";

const UserList = () => {
  const [MyCookie, setMyCookie] = useState()
  const router = useRouter();
  const { page } = router.query
  const itemsByPage = 10;
  const [dataUser, setDataUser ] = useState()

  useEffect(() => {
    setMyCookie(cookie?.get("myCookie"));
  }, [ cookie?.get("myCookie")]);

  useEffect(() => {
    const makeFetch = async () => {
      const data = {
        MyCookie,
        page: page || 1,
        itemsByPage
      }
      try {
        const response = await axios.post("/api/list-users", data);
        
        setDataUser(response.data)
      } catch (error) {
        console.log(error);
      }
    }

    makeFetch()
  }, [page])

  return (
    <StyledUserList>
      <div className="userhead">
        <p>Apelido</p>
        <p>Email</p>
      </div>
      
      {dataUser?.users?.map((item) => {
        return (
          <>
            <div className="list-user-content">
              <div className="list-user-card">
                <p>{item?.apelido}</p>
                <p>{item?.email}</p>
                <div className="botoes-container">
                  <a href="" className="editar" onClick={(e) => {
                    e.preventDefault()

                    cookie.set('userId', item?.id)
                    cookie.set('userEmail', item?.email)
                    cookie.set('userApelido', item?.apelido)

                    router.push({pathname: '/editar-usuario'})
                  }}>
                    Editar
                  </a>
                </div>
              </div>
            </div>
          </>
        )
      })}

      {page < dataUser?.totalPages && <Button title="Ver mais" link={'/gerenciar-usuarios?page=' + (parseInt(page) + 1)}/>}
      {!page && dataUser?.totalPages > 1 && <Button title="Ver mais" link={'/gerenciar-usuarios?page=' + 2}/>}
    </StyledUserList>
  );
};

export default UserList;

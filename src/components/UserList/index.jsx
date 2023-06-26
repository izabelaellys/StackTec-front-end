import { useEffect, useState } from "react";
import { StyledUserList } from "./styles";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import Button from "../Button";

const UserList = () => {
  const [MyCookie, setMyCookie] = useState();
  const router = useRouter();
  const { page } = router.query;
  const itemsByPage = 10;
  const [dataUser, setDataUser] = useState();
  const [search, setSearch ] = useState();

  useEffect(() => {
    setMyCookie(cookie?.get("myCookie"));
  }, [cookie?.get("myCookie")]);

  useEffect(() => {
    const makeFetch = async () => {
      const data = {
        MyCookie,
        page: page || 1,
        itemsByPage,
      };
      try {
        const response = await axios.post("/api/list-users", data);

        setDataUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if(!search){
      makeFetch();
    }
    
  }, [page, search]);

  const searchUser = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("/api/pesquisa-usuario", {
        MyCookie,
        search: search,
        page: 1,
        itemsByPage: itemsByPage || 10
      });

      setDataUser(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledUserList>
      <form className="caixa-pesquisa" onSubmit={(e) => searchUser(e)}>
        <input type="text" placeholder="Pesquise e-mail do usuário" value={search} onChange={(e) => setSearch(e.target.value)} />
        <span className="search-icon" onClick={(e) => searchUser(e)}>
          <svg
            className="svgIcon-use"
            width="30"
            height="40"
            viewbox="0 -5 28 15"
          >
            <path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path>
          </svg>
        </span>
      </form>

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
                  <a
                    href=""
                    className="editar"
                    onClick={(e) => {
                      e.preventDefault();

                      cookie.set("userId", item?.id);
                      cookie.set("userEmail", item?.email);
                      cookie.set("userApelido", item?.apelido);

                      router.push({ pathname: "/editar-usuario" });
                    }}
                  >
                    Editar
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      })}

      {page < dataUser?.totalPages && (
        <Button
          title="Ver mais"
          link={"/gerenciar-usuarios?page=" + (parseInt(page) + 1)}
        />
      )}
      {!page && dataUser?.totalPages > 1 && (
        <Button title="Ver mais" link={"/gerenciar-usuarios?page=" + 2} />
      )}
      {search && <Button title="Voltar" link="/gerenciar-usuarios?page=1" />}
    </StyledUserList>
  );
};

export default UserList;

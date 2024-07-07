import { MdDeleteForever  } from "react-icons/md";
import { useSelector , useDispatch  } from "react-redux";
import styled from "styled-components";
import {removeUser} from "../store/slices/UserSlice"




function DisplayUsers() {
  const data = useSelector((state) => {
    return state.users;
  });

  const dispatch = useDispatch();
  // console.log(data);

  const deleteUser = (id) => {
    dispatch(removeUser(id))
  };

    

  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li className="admin-table" key={id}>
            {user}
            <button className="btn-delete" onClick={() => deleteUser(id)}>
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  li {
    text-align: left;
  }

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default DisplayUsers;

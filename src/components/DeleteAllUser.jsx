import styled from "styled-components";
import { useDispatch } from "react-redux";
import { clearUsers } from "../store/actions";

function DeleteAllUser() {

  const dispatch = useDispatch(); 

const deleteUsers = () => {
  dispatch(clearUsers());
}

  return (
    <Wrapper>
    <button className="btn  clear-btn" onClick={deleteUsers}  >DeleteAllUser</button>
  
    </Wrapper>
  )
}

const Wrapper = styled.section`
.clear-btn {
   text-transform:capitalize;
   background-color:#db338a;
   margin-top:2rem;
}  `


export default DeleteAllUser
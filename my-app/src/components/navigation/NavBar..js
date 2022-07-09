import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const Menu = styled.div`
    position: absolute;
    display: flex;
    left: 0;
    top: 0;
    width: 100%;
    height: 80px;
    background-color: rgba(241,187,159, 0.8);
`

const Button = styled.div`
  background-color: transparent;
  padding-left: 300px;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  &:hover {
    opacity: 0.3;
  }
`

const Label = styled.label`
  font-family: The Nautigal;
  font-size: 64px;
  color: black;
`

export const NavBar = () => {

    const navigate = useNavigate();

    return(
        <Menu>
            <Button onClick={() => {
                navigate("home", { replace: true });
            }}>
            <Label>Strona główna</Label>
            </Button>
            <Button onClick={() => {
                navigate("dojazd", { replace: true });
            }}>
            <Label>Dojazd</Label>
            </Button>
        </Menu>
    )
}
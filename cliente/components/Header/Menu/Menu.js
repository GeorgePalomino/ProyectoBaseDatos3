import { useState } from "react";
import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react"
import Link from "next/link";
import BasicModal from "../../Modal/BasicModal";
import Auth from "../../Auth";
import useAuth from "../../../hooks/useAuth";

export default function MenuWeb() {
const [showModal, setShowModal] = useState(false);
const [titleModal, setTitleModal]= useState("Inicia Sesion");
const{auth,logout}=useAuth();

const onShowModal = () => setShowModal(true);
const onCloseModal = () => setShowModal(false);

  return (
    <div className="menu">
        <Container>
            <Grid>
                <Grid.Column className="menu__left" width={6}>
                    <MenuPlatforms/>
                </Grid.Column>
                <Grid.Column className="menu__right" width={10}>
                    
                    {auth ? <button onClick={logout}>Cerrar Sesion</button>: (<MenuOptions onShowModal={onShowModal}/>)}
                </Grid.Column>
            </Grid>
        </Container>
        <BasicModal show={showModal} setShow={setShowModal} title={titleModal} size="small">
            <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal}/>
        </BasicModal>
    </div>
  );
}

function MenuPlatforms(){
    return(
        <Menu>
            <Link href="/automovil">
                    <Menu.Item as="a">
                        Automovil
                    </Menu.Item>
            </Link>
            <Link href="/camioneta">
                    <Menu.Item as="a">
                        Camioneta
                    </Menu.Item>
            </Link>
            <Link href="/minivan">
                    <Menu.Item as="a">
                        Minivan
                    </Menu.Item>
            </Link>
            <Link href="/camion">
                    <Menu.Item as="a">
                        Camion
                    </Menu.Item>
            </Link>
            <Link href="/van">
                    <Menu.Item as="a">
                        Van
                    </Menu.Item>
            </Link>
        </Menu>
    );
}

function MenuOptions(props){
    const{onShowModal} = props;
    return(
        <Menu>
            <Menu.Item onClick={onShowModal}>
                <Icon name="user outline"/>
                Mi cuenta
            </Menu.Item>
        </Menu>
    )
}
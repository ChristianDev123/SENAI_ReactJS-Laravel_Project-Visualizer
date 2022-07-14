import {Container, CurrentLinkPage, DetailPage, DivAll, LinkLabel, Logo, StrongLink, Wrapper} from './SidebarStyles';
import SenaiLogo from '../../assets/img/LogoSenai.png'
import { Link } from 'react-router-dom';

export default function Sidebar({page='Novo Projeto'}){
    const buttons = [
        {name:'Novo Projeto', link:'/'},
        {name:'Adicionar Midia',link:'/newmidia'},
        {name:'Ver Todos Projetos',link:'/allprojects'}]
    return(
        <Container>
            <Wrapper>
                <Logo src={SenaiLogo} alt="Senai Logo"/>
            </Wrapper>
            <Wrapper>
            {buttons.map(({name,link},index)=>{
                if(name === page) return currentPage(name,index);
                return anotherPages(name,link, index)
            })}
            </Wrapper>
        </Container>
    );
}

function currentPage(label,index){
    return(
        <CurrentLinkPage key={index}>
            <DivAll>
                <StrongLink>
                    {label}
                </StrongLink>
            </DivAll>
            <DetailPage/>
        </CurrentLinkPage>
    );
}

function anotherPages(label,link,index){
    return(
        <Link to={link} key={index}>
            <LinkLabel>
                {label}
            </LinkLabel>
        </Link>
    )
}
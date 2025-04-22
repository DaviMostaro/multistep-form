import { Link } from "react-router-dom";
import { Container, IconArea, Info, Point, Title } from "./styles";
import { Description } from "../SelectOptions/styles";
import { ReactComponent as ProfileIcon } from '../../svgs/profile.svg';
import { ReactComponent as BookIcon } from '../../svgs/book.svg';
import { ReactComponent as MailIcon } from '../../svgs/mail.svg';
import { ReactComponent as VerificarIcon } from '../../svgs/verificar.svg';

type Props = { 
    className?: string;
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SidebarItem = ({title, description, icon, path, active, className}: Props) => {
    return (
        <Container className={className}>
            <Link to={path}>
                <Info>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Info>
                <IconArea active={active}>
                    {icon === 'profile' && 
                        <ProfileIcon fill="#fff" width={24} height={24} />
                    }

                    {icon === 'book' && 
                        <BookIcon fill="#fff" width={24} height={24} />
                    }

                    {icon === 'mail' && 
                        <MailIcon fill="#fff" width={24} height={24} />
                    }

                    {icon === 'verificar' && 
                        <VerificarIcon fill="#fff" width={24} height={24} />
                    }
                </IconArea>
                <Point active={active}></Point>
            </Link>
        </Container>
    );
}
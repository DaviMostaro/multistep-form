import { Area, Container, Page, Sidebar, Steps } from "./styles";

import { Header } from "../Header";
import { SidebarItem } from "../SidebarItem";
import { useForm } from '../../contexts/FormContext';

type Props = {
    children: React.ReactNode;
}

export const Theme = ({children}: Props) => {
    const { state } = useForm();

    return (
        <Container>
            <Area>
                <Header />

                <Steps>
                    <Sidebar>
                        
                        <SidebarItem
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />

                        <SidebarItem
                            title="Profissional"
                            description="Seu nível"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />

                        <SidebarItem
                            title="Contatos"
                            description="Como te achar"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />

                        <SidebarItem 
                            className="last"    
                            title="Confirmação"
                            description="Agradecemos seu cadastro"
                            icon="verificar"
                            path="/final"
                            active={state.currentStep === 4}
                        />

                    </Sidebar>
                    <Page>
                        {children}
                    </Page>
                </Steps>
            </Area>
        </Container>
    )
}
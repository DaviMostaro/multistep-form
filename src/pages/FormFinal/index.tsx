import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { Container } from "./styled";
import { useForm, FormActions} from "../../contexts/FormContext";
import { useEffect } from "react";

export const FormFinal = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '' || state.email === '' || state.github === '') {
            alert('Preencha todos os campos antes de continuar!');
            navigate('/')
        }

        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
        });
    }, [])

    return (
        <Theme>
            <Container>
                <h1>Obrigado por se cadastrar! 🥳🏅</h1>
                <h2>Essas são as informações enviadas:</h2>
                <p>Nome: {state.name}</p>
                <p>Seu nível é: {state.level === 0 ? 'Iniciante 👶' : 'Profissional 👨‍💻'}</p>

                <div>
                    <h3>Contatos:</h3>
                    <p>E-mail: {state.email}</p>
                    <p>GitHub: {state.github}</p>
                </div>

                <button onClick={() => navigate('/')}>Voltar para o início</button>
            </Container>
        </Theme>
    )
}
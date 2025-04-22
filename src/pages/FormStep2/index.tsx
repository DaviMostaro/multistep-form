import { useNavigate, Link } from 'react-router-dom';
import { Container } from "./styles";
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from "../../components/Theme";
import { useEffect } from 'react';
import { SelectOptions } from '../../components/SelectOptions';

export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            navigate('/');
            return;
        }

        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        });
    }, []);

    const handleNextStep = () => {
        if(state.name === '') {
            alert('Preencha o campo com o seu nome completo!');
            return;
        }
        if(state.name !== '' && state.name.length < 3) {
            alert('O nome deve conter no mínimo 3 caracteres!');
            return;
        }
        
        if(state.name !== '' && state.name.length >= 3) {
            navigate('/step3');
        }

    }   

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    return (
        <Theme>
            <Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Selecione a opção que melhor condiz com seu estado atual, profissionalmente.</p>

                <hr />

                <SelectOptions 
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="👶"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOptions 
                    title="Sou programador"
                    description="Comecei a programar há mais de 2 anos"
                    icon="👨‍💻"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to='/' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </Container>
        </Theme>
    )
}
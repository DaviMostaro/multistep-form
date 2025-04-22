import { useNavigate } from 'react-router-dom';
import { Container } from "./styles";
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from "../../components/Theme";
import { useEffect } from 'react';

export const FormStep1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
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
            navigate('/step2');
        }

    }   

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }   

    return (
        <Theme>
            <Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com o seu nome completo</p>

                <hr />

                <label>
                    Seu nome completo

                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </Container>
        </Theme>
    )
}
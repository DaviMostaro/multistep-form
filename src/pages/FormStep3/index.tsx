import { useNavigate } from 'react-router-dom';
import { Container } from "./styles";
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from "../../components/Theme";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            navigate('/');
            return;
        }

        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
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
        
        if(state.email === '') {
            alert('Preencha o campo com o seu e-mail!');
            return;
        }
        if(state.email !== '' && state.email.length < 3) {
            alert('O e-mail deve ser válido!');
            return;
        }

        if(state.github === '') {
            alert('Preencha o campo com o seu Github!');
            return;
        }
        if(state.github !== '' && state.github.length < 3) {
            alert('O Github deve ser válido!');
            return;
        }

        alert('Cadastro realizado com sucesso!');
        navigate('/final');
    }   

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com suas informações para conseguirmos entrar em contato</p>

                <hr />

                <label>
                    Qual seu E-mail?

                    <input
                        type="email"
                        autoFocus
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu Github?

                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to='/step2' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </Container>
        </Theme>
    )
}
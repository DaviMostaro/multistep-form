import styled from 'styled-components';

export const Container = styled.div`
    p {
        font-size: 13px;
        color: #B8B8D4;
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;    
    }

    hr {
        height: 1px;
        border: 0;
        background: #16195C;
        margin: 30px 0; 
    }

    label {
        font-size: 13px;
        display: block;
        margin-bottom: 20px;

        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: white;
            outline: 0;
            font-size: 15px;
            background-color: #02044A;
        }
    }

    button {
        margin-top: 30px;
        background-color: #25CD89;
        color: #FFF;
        border: 0;
        border-radius: 30px;
        padding: 20px 40px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
    }
    button:hover {
        opacity: 0.9;
    }

    .backButton {
        color: #B8B8D4;
        border: 0;
        border-radius: 30px;
        padding: 20px 40px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
        margin-right: 15px;
    }
`;
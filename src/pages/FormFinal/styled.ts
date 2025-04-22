import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 17px;
        color: #B8B8D4;
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;    
    }

    h2 {
        margin: 0;
        padding: 0;
        font-size: 20px;    
    }

    div {
        margin-top: 30px;
        padding: 20px;
        background-color: #16195C;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
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
`;


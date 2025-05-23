import styled from "styled-components";

export const Container = styled.div<{ selected: boolean }>`
    display: flex;
    border: 2px solid ${props => props.selected ? '#25CD89' : '#16195C'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;

    &:hover {
        border: 2px solid #496459;
    }
`;

export const Icon = styled.div`
    font-size: 30px;
    margin-right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #191A59;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Info = styled.div`
    flex: 1;
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 7px;
    color: white;
`;

export const Description = styled.div`
    font-size: 14px;
    color: #B8B8D4;
    margin: 0;    
`;
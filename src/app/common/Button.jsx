import styled from 'styled-components';

const Button = styled.button`
    border-radius: 10px;
    background-color: #fc9924;
    width: 256px;
    height: 61px;
    font-size: 17px;
    color: #ffffff;
    border: none;
    padding-top: 5px;
    cursor: pointer;

    &:hover {
        border: 2px solid #ff9a00;
        background: none;
        color: #fc9924;
    }
`;

export default Button;

import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoList = styled.div`
  background: #fff;
  padding: 30px 20px;
  border-radius: 5px;

  h1 {
    text-align: center;
    font-size: 20px;
    line-height: 10px;
    margin-bottom: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #8052ec;
    text-shadow: 0px 0px 5px rgba(139, 4, 206, 0.41);
  }

  ul {
    padding: 0;
    margin-top: 50px;
  }
`;

export const TodoListInput = styled.input`
  width: 380px;
  border: 2px solid rgba(209, 211, 212, 0.4);
  height: 40px;
  margin-right: 10px;
  border-radius: 5px;
  outline: none;
  margin-right: 20px;
  padding: 0 15px;

  &::placeholder {
    line-height: 16px;
  }

  &:focus {
    border: 2px solid #8052ec;
  }
`;

export const Button = styled.button`
  background: #8052ec;
  box-shadow: 0 2px 23px 0 rgba(93, 56, 255, 0.3);
  border-radius: 5px;
  border: none;
  height: 40px;
  padding: 0 15px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  width: 130px;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const ListItem = styled.div`
  border-radius: 5px;
  height: 60px;
  background: ${({ $isFinished }) => ($isFinished ? '#80e852ec' : '#e4e4e4')};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 15px;
  width: 500px;

  li {
    list-style: none;
    font-size: 16px;
    line-height: 60px;
    padding: 0 15px;
  }
`;

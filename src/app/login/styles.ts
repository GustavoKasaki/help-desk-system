import styled from 'styled-components'

export const LoginPage = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  background: #ccc;
  backdrop-filter: blur(30px);
  border: 2px solid #000;
  border-radius: 10px;
  padding: 40px;
  color: #000;

  form {
    margin-top: 24px;
  }

  .icon-back {
    position: absolute;
    height: 34px;
    top: 40px;
    left: 25px;
    cursor: pointer;
  }

  h1 {
    text-align: center;
    font-size: 30px;
  }

  .input-field {
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px auto;

    input {
      width: 100%;
      height: 100%;
      background: #eee;
      outline: none;
      border: 2px solid #000;
      border-radius: 40px;
      font-size: 16px;
      padding: 20px 45px 20px 25px;
      color: #000;

      &::placeholder {
        color: #000;
      }
    }

    .icon {
      position: absolute;
      right: 25px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px;
    }
  }

  .recall-forget {
    text-align: center;
    margin-bottom: 24px;

    label {
      display: flex;
      align-items: center;

      input {
        accent-color: #000;
        margin-right: 4px;
      }
    }

    a {
      color: #000;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

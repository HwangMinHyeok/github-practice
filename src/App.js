import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { COLORS } from "./values/colors";

const Container = styled.div`
  height: 100vh;
  background-color: ${COLORS.mainBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    margin-bottom: 24px;
  }

  a {
    color: ${COLORS.mainLinkColor};
    text-decoration: none;
  }
`;

const OAuth2Btn = styled.button`
  background-color: ${(props) => props.bgColor || "white"};
  color: ${(props) => props.color || "white"};
  width: 277.99px;
  height: 37.4px;
  margin: 4px 0;
  border: 0.5px solid lightgrey;
  border-radius: 5px;
  font-size: 13px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > img{
    /* background-color: white; */
    margin: 0 3px;
  }
`;

// TODO: form -> button click-> api 요청
const LoginBox = styled.div`
  background-color: white;
  width: 277.99px;
  height: 233.43px;
  margin: 16px 0 24px 0;
  padding: 24px;
  border-radius: 5px;
  /* box-shadow: 3px 3px 10px #7d7d7d; */
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  font-size: 13px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > form {
    li {
      list-style: none;
    }
    label {
      color: ${COLORS.mainColor};
      margin: 2px 0;
      font-size: 15px;
      font-weight: 600;
    }
    input[type="email"],
    input[type="password"] {
      width: 229.99px;
      height: 32.4px;
      /* padding: 7.8px 9.1px; */
      margin-bottom: 16px;
    }
    input[type="submit"] {
      width: 229.99px;
      height: 37.4px;
      background-color: ${COLORS.mainBtn};
      color: white;
      border: none;
      border-radius: 5px;
      text-align: center;
    }
  }
`;

const ExtraMsg = styled.div`
  padding: 16px;
  font-size: 13px;
  text-align: center;
  & > p {
    margin: 6px 0;
  }
`;

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <a href="https://www.youtube.com/watch?v=m3sM0zIG1jY">
    //       OMG by New Jeans
    //     </a>
    //   </header>
    <Container>
      <img
        src="https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-icon.svg"
        alt="stackoverflow logo 2"
        width="32px"
      />
      <OAuth2Btn color={COLORS.googleColor}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="Google logo"
          width="18"
        />
        Log in with Google
      </OAuth2Btn>
      <OAuth2Btn bgColor={COLORS.github}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="GitHub Logo"
          width="18"
        />
        Log in with GitHub
      </OAuth2Btn>
      <OAuth2Btn bgColor={COLORS.facebook}>Log in with Facebook</OAuth2Btn>
      <LoginBox>
        <form action="">
          <ul>
            <li>
              <label htmlFor="email_input">Email</label>
              <input
                type="email"
                id="email_input"
                role="textbox"
                autoComplete="off"
              />
            </li>
            <li>
              <label htmlFor="password_input">Password</label>
              <input type="password" id="password_input" role="textbox" />
            </li>
            <li>
              <input type="submit" value="Log in" />
            </li>
          </ul>
        </form>
      </LoginBox>
      <ExtraMsg>
        <p>
          Don't have an account? <a href="#">Sign up</a>
        </p>
        <p>
          Are you an employer? <a href="#">Sign up on Talent (icon)</a>
        </p>
      </ExtraMsg>
    </Container>
    // </div>
  );
}

export default App;

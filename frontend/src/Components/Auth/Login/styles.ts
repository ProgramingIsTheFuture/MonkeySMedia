import styled from "styled-components";

export const Container = styled.div`
    form {
        width: 300px;
        padding: 40px;

        position: absolute;
        top: 50%;

        right: 25%;
        transform: translate(25%, -53%);
        
        text-align: center;

        h1 {
            text-transform: uppercase;
            font-weight: bold;
        }

        input[type='text'], input[type="password"] {
            border: 2px solid var(--card);
            background: none;

            display: block;
            margin: 20px auto;

            text-align: center;
            padding: 14px 20px;

            width: 200px;
            outline: none;

            color: black;
            border-radius: 24px;

            transition: 0.20s;

            :focus {
                border: 2px solid var(--nav-color);
                width: 250px;
            }
        }

        input[type="submit"] {
            border: 2px solid var(--card);
            background: none;

            display: block;
            margin: 20px auto;

            text-align: center;
            padding: 14px 20px;

            border-radius: 24px;
            transition: 0.20s;

            :hover {
                border: 2px solid var(--nav-color);
            }
        }

    }
  }
`;

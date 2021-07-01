import React, { useState, useEffect } from "react";
import { RgbaStringColorPicker } from "react-colorful";

import { colord } from "colord";

import { Container, ButtonG } from "./styles";

type DefaultTheme = {
  primary: string;
  secundary: string;
  card: string;
  white: string;
  red: string;
};

const ThemeChooser: React.FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>({} as DefaultTheme);

  useEffect(() => {
    if (Object.keys(theme).length === 0) {
      setTheme(
        !JSON.parse(localStorage.getItem("theme"))
          ? JSON.parse(localStorage.getItem("default-theme"))
          : JSON.parse(localStorage.getItem("theme"))
      );
    }
  }, [theme]);

  useEffect(() => {
    if (Object.keys(theme).length > 0) {
      let t = theme;
      Object.keys(theme).map((i) => {
        t[i] = theme[i].startsWith("rgba")
          ? theme[i]
          : (() => {
              let a = colord(theme[i]).toRgb();
              return `rgba(${a.r}, ${a.g}, ${a.b}, ${a.a})`;
            })();
      });
      setTheme(t);
    }
  }, [theme]);

  const handleColor = (toChange: string, color: string) => {
    let n = theme;
    n[toChange] = `${color}`;
    setTheme(n);
  };

  return (
    <Container>
      <div>
        <label htmlFor={"primary"}>Cor primaria</label>
        <RgbaStringColorPicker
          className={"primary"}
          color={theme.primary}
          onChange={(color) => handleColor("primary", color)}
        />
      </div>
      <div>
        <label htmlFor={"secundary"}>Cor secundaria</label>
        <RgbaStringColorPicker
          className={"secundary"}
          color={theme.secundary}
          onChange={(color) => handleColor("secundary", color)}
        />
      </div>
      <div>
        <label htmlFor={"card"}>Cor de card</label>
        <RgbaStringColorPicker
          className={"card"}
          color={theme.card}
          onChange={(color) => handleColor("card", color)}
        />
      </div>
      <div>
        <label htmlFor={"white"}>Cor branca</label>
        <RgbaStringColorPicker
          className={"white"}
          color={theme.white}
          onChange={(color) => handleColor("white", color)}
        />
      </div>
      <div>
        <label htmlFor={"red"}>Cor vermelha</label>
        <RgbaStringColorPicker
          className={"red"}
          color={theme.red}
          onChange={(color) => handleColor("red", color)}
        />
      </div>
      <ButtonG>
        <button
          style={{ backgroundColor: theme.secundary }}
          onClick={() => {
            localStorage.setItem("theme", JSON.stringify(theme));
            window.location.reload();
          }}
        >
          Guardar alterações
        </button>
        <button
          style={{ backgroundColor: theme.card }}
          onClick={() => {
            localStorage.removeItem("theme");
            window.location.reload();
          }}
        >
          Resetar o tema
        </button>
      </ButtonG>
    </Container>
  );
};

export default ThemeChooser;

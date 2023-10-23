import React, {
  createContext,
  use,
  useContext,
  useEffect,
  useState,
} from "react";

export type Palette = {
  identifier: string;
  class: string;
  sign: string;
  string: string;
  keyword: string;
  comment: string;
  jsxliterals: string;
};

export type Preset = {
  label: string;
  value: string;
  palette: Palette;
};

type PaletteContextProps = {
  palettes: { label: string; presets: Preset[] }[];
  addCustomPalette: (preset: Preset) => void;
  selectedPalette: Preset;
  setSelectedPalette: (preset: Preset) => void;
};

export const defaultPalette: Palette = {
  class: "#8d85ff",
  identifier: "#354150",
  sign: "#8996a3",
  string: "#00a99a",
  keyword: "#f47067",
  comment: "#a19595",
  jsxliterals: "#bf7db6",
};

const PaletteContext = createContext<PaletteContextProps | undefined>(
  undefined
);

export const PaletteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [palettes, setPalettes] = useState([
    {
      label: "Default Palettes",
      presets: [
        {
          label: "SH Default",
          value: "sh-default",
          palette: defaultPalette,
        },
        {
          label: "v0",
          value: "v0",
          palette: {
            class: "#00a7fd",
            identifier: "#fff",
            sign: "#9b9b9b",
            string: "#00e7c1",
            keyword: "#ff0078",
            comment: "#a19595",
            jsxliterals: "#ffff72",
          },
        },
      ],
    },
    {
      label: "Custom Palettes",
      presets: [],
    },
  ]);
  const [selectedPalette, setSelectedPalette] = useState<Preset>(
    palettes[0].presets[0]
  );

  const addCustomPalette = (preset: Preset) => {
    // Logic to add custom palette
    const updatedPalettes = [...palettes];
    const customPaletteGroup = updatedPalettes.find(
      (group) => group.label === "Custom Palettes"
    );
    if (customPaletteGroup) {
      customPaletteGroup.presets.push(preset);
    } else {
      updatedPalettes.push({
        label: "Custom Palettes",
        presets: [preset],
      });
    }
    setPalettes(updatedPalettes);
  };

  return (
    <PaletteContext.Provider
      value={{
        palettes,
        addCustomPalette,
        selectedPalette,
        setSelectedPalette,
      }}
    >
      {children}
    </PaletteContext.Provider>
  );
};

export const usePalette = () => {
  const context = useContext(PaletteContext);
  if (!context) {
    throw new Error("usePalette must be used within a PaletteProvider");
  }
  return context;
};

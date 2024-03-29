const getColors = (pageColor) => {
  switch (pageColor) {
    case "dark":
      return {
        textColor: "text-white",
        headingColor: "text-[#6CB2EB]",
        buttonColor: "text-white",
        cardColor: "bg-gray-800",
        hoverColor: "hover:bg-[#2C3842]",
        sectionColor: "bg-[#1f2937]",
        borderColor: "border-2 border-white",
      };
    case "green":
      return {
        textColor: "text-white",
        headingColor: "text-[#A3EFE8]",
        buttonColor: "text-white",
        cardColor: "bg-green-800",
        hoverColor: "hover:bg-[#144647]",
        sectionColor: "bg-[#143337]",
        borderColor: "border-2 border-white",
      };

    default:
      return {};
  }
};

export default getColors;

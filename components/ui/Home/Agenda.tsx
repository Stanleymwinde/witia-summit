import { MarginX } from "@/utils";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Agenda = () => {
  return (
    <>
      <Box
        marginX={MarginX}
        textAlign={"center"}
        py={10}
        width={"100%"}
        mx={"auto"}
        justifyContent={"center"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Image alt="Agenda" src="/agenda.png" width={1200} height={600} />
      </Box>
    </>
  );
};

export default Agenda;

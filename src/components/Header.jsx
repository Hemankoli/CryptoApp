import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./head.css";

const Header = () => {
  return (
  
    <HStack className="center" p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button color={"black"}>
        <Link to="/">Home</Link>
      </Button>
      <Button color={"black"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button color={"black"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;

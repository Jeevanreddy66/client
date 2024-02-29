"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Home";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<number>(0);

  const [route, setRoute] = useState<string>("login");

  return (
    <>
      <Heading
        title="ELearning"
        description="Elearning is a platform for students to learn and get help from teachers"
        keywords="MERN,Programming,Redux,Machhine Learning"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        route={route}
        setRoute={setRoute}
      />
      <Hero />
    </>
  );
};

export default Page;

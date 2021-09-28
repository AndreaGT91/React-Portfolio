import React from "react";
import Column from "../Column";
import Figure from "../Figure";
import Anchor from "../Anchor";
import Image from "../Image";

function Project({ name, type, imgFile, repoLink, deployLink }) {
  // CLI projects have animated GIF instead of depoyment link
  let depLink;
  if (deployLink.startsWith("http")) {
    depLink = deployLink;
  }
  else {
    depLink = require("../../assets/" + deployLink);
  };

  return (
    <Column page="Portfolio">
      <Figure>
        <Anchor htmlRef={depLink}>
          <Image classes="my-image" source={require("../../assets/" + imgFile).default} 
            altText={name} />
        </Anchor>
        <Anchor htmlRef={repoLink}>
          <figcaption>{name} {type}</figcaption>
        </Anchor>
      </Figure>
    </Column>
  );
};

export default Project;
import React, { FC } from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className="lost">
      <h3 >{title}</h3>
      {figures.map((figure) => (
        <div className="lost_fig" key={figure.id}>
          {figure.name}{" "}
          {figure.logo && <img width={30} height={30} src={figure.logo} alt="" />}
        </div>
      ))}
    </div>
  );
};

export default LostFigures;

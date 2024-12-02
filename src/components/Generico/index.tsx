import React from 'react';

interface GenericComponentProps {
  title: string;
  description: string;
  releasedDate: string;
}

const GenericComponent: React.FC<GenericComponentProps> = ({ title, description, releasedDate }) => {
  return (
    <div className="game-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <span>Released on: {releasedDate}</span>
    </div>
  );
};

export default GenericComponent;
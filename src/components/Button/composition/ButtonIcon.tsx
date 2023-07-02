import React from 'react';

interface Icons {
  icon: React.ElementType;
}

export const ButtonIcon = ({ icon: Icon }: Icons) => (
  <div>
    <Icon />
  </div>
);

import React from 'react';

type TagProps = {
  name: string;
  color: string;
};

const Tag: React.FC<TagProps> = ({ name, color }) => {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`}
      style={{ backgroundColor: color }}
    >
      #{name}
    </span>
  );
};

export default Tag;

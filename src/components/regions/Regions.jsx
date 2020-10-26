import React from 'react';

import RegionItem from './RegionItem';

export default function Regions({ regions, selectedRegionName, onClickSelectRegion }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <RegionItem
          key={id}
          regionName={name}
          isSelected={name === selectedRegionName}
          onClick={() => onClickSelectRegion(name)}
        />
      ))}
    </ul>
  );
}

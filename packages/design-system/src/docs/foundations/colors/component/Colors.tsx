import React from 'react';
import {colors} from '../../../../tokens';

const Colors = () => {
  return (
    <div className="p-spacing-sm grid gap-x-spacing-sm gap-y-8 grid-cols-fill min-w-[360px]">
      {Object.entries(colors).map(([key, value]) => {
        return (
          <div key={key}>
            <canvas className={`${key} w-40 h-40`} />
            <div>
              <p>{key.substring(3).toUpperCase()}</p>
              <p>{value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Colors;
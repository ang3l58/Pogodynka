import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUnit } from '../store/weatherSlice';

const UnitSwitcher = () => {
  const dispatch = useDispatch();
  const currentUnit = useSelector((state) => state.weather.unit);

  return (
    <div className="unit-switcher">
      {['C', 'F', 'K'].map((u) => (
        <button 
          key={u}
          onClick={() => dispatch(setUnit(u))}
          className={currentUnit === u ? 'active' : ''}
        >
          °{u}
        </button>
      ))}
    </div>
  );
};

export default UnitSwitcher;
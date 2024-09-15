import { useSelector } from 'react-redux';
import { selectSingleItem } from '../../redux/campersSlice';
import Badges from '../badges/Badges';
import css from './Features.module.css';

const Features = () => {
  const item = useSelector(selectSingleItem);

  return (
    <div className={css.component}>
      <div className={css.options}>
        <Badges item={item} />
      </div>

      <h3 className="section-title">Vehicle details</h3>

      {item.transmission && <p className={css.item}>
        <span>Transmission</span>
        <span>{item.transmission}</span>
      </p>}

      {item.engine && <p className={css.item}>
        <span>Engine</span>
        <span>{item.engine}</span>
      </p>}

      {item.AC && <p className={css.item}>
        <span>AC</span>
        <span>+</span>
      </p>}

      {item.bathroom && <p className={css.item}>
        <span>Bathroom</span>
        <span>+</span>
      </p>}

      {item.kitchen && <p className={css.item}>
        <span>Kitchen</span>
        <span>+</span>
      </p>}

      {item.tv && <p className={css.item}>
        <span>TV</span>
        <span>+</span>
      </p>}

      {item.radio && <p className={css.item}>
        <span>Radio</span>
        <span>+</span>
      </p>}

      {item.refrigerator && <p className={css.item}>
        <span>Refrigerator</span>
        <span>+</span>
      </p>}

      {item.microvawe && <p className={css.item}>
        <span>Microvawe</span>
        <span>+</span>
      </p>}

      {item.gas && <p className={css.item}>
        <span>Gas</span>
        <span>+</span>
      </p>}

      {item.water && <p className={css.item}>
        <span>Water</span>
        <span>+</span>
      </p>}

      <p className={css.item}>
        <span>Form</span>
        <span>{item.form}</span>
      </p>

      <p className={css.item}>
        <span>Length</span>
        <span>{item.length}</span>
      </p>

      <p className={css.item}>
        <span>Width</span>
        <span>{item.width}</span>
      </p>

      <p className={css.item}>
        <span>Height</span>
        <span>{item.height}</span>
      </p>

      <p className={css.item}>
        <span>Tank</span>
        <span>{item.tank}</span>
      </p>

      <p className={css.item}>
        <span>Consumption</span>
        <span>{item.consumption}</span>
      </p>
    </div>
  );
};

export default Features;

import { useSelector } from 'react-redux';
import { selectSingleItem } from '../../redux/campersSlice';
import ItemOptions from '../item-options/ItemOptions';
import css from './Features.module.css';

const Features = () => {
  const item = useSelector(selectSingleItem);

  return (
    <div className={css.component}>
      <div className={css.options}>
        <ItemOptions item={item} />
      </div>

      <h3 className="section-title">Vehicle details</h3>

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

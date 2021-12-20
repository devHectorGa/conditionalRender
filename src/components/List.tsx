import { FC } from 'react';
import { IData } from '../data';
import Element from './Element';

export interface IList {
  data?: [string, IData[]];
}

const List: FC<IList> = ({ data }) => {
  if (!data) return null;

  const [key, value] = data;
  return (
    <section key={key}>
      <h2>{key}</h2>
      <ul>
        {value?.map((element) => (
          <Element key={element.Id} element={element} />
        ))}
      </ul>
    </section>
  );
};

export default List;

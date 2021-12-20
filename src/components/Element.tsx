import { FC } from 'react';
import { IData } from '../data';

interface IElement {
  element: IData;
}

const Element: FC<IElement> = ({ element }) => {
  return (
    <article>
      <h3>{element.Title}</h3>
    </article>
  );
};

export default Element;

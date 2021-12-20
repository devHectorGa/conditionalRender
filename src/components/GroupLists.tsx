import {
  FC,
  Children,
  isValidElement,
  ReactNode,
  cloneElement,
  PropsWithChildren,
} from 'react';
import { IDatas } from '../data';
import List from './List';

type IGroupLists = PropsWithChildren<{
  appData: IDatas;
}>;

const getActiveChildren = (
  children: ReactNode,
  type: FC,
  defaultComponent: ReactNode
): ReactNode =>
  Children.toArray(children).find((c) =>
    isValidElement(c) ? c.type === type : false
  ) || defaultComponent;

const ListContainer = ({ children }: PropsWithChildren<any>): JSX.Element => (
  <>{children}</>
);

const GroupLists = ({ appData, children }: IGroupLists): JSX.Element => {
  const listChildren = getActiveChildren(children, ListContainer, <List />);

  return (
    <>
      {Boolean(appData) ? (
        Object.entries(appData).map((data) =>
          Boolean(data[1].length) && isValidElement(listChildren)
            ? cloneElement(listChildren, { key: data[0], data: data })
            : listChildren
        )
      ) : (
        <div>Load</div>
      )}
    </>
  );
};

GroupLists.List = ListContainer;

export default GroupLists;

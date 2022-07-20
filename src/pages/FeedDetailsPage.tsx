import { ReactElement } from "react";

interface FeedDetailPageInterface {
    children: ReactElement | JSX.Element; // Что будет в теле модального окна
  }

export const FeedDetailPage = ({children} :FeedDetailPageInterface) => {
    console.log(111)
  return  children
};

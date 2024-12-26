import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/reducer/counter";
import { RootState } from "../redux/store";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Counter: React.FC = () => {
  const { t }: { t: any } = useTranslation();
  const count: number = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(increment());
  };

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(decrement());
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('Counter')} {count}</h1>
      <button onClick={handleIncrement}>{t('increment')}</button>
      <button onClick={handleDecrement}>{t('decrement')}</button>
      <div>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("ta")}>தமிழ்</button>
      </div>
    </div>
  );
};

export default Counter;

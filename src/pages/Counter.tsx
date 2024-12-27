import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from 'motion/react';
import { decrement, increment } from "../redux/reducer/counter";
import { RootState } from "../redux/store";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Counter: React.FC = () => {
  const { t }: {t: any} = useTranslation();
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
    <div className="p-4">
      <motion.h1
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={t('Counter')}
      >
        {t('Counter')} {count}
      </motion.h1>
      <motion.button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2 ripple"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.3 }}
        onClick={handleIncrement}
      >
        {t('increment')}
      </motion.button>
      <motion.button
        className="bg-red-500 text-white px-4 py-2 rounded ripple"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleDecrement}
      >
        {t('decrement')}
      </motion.button>
      <div className="mt-4">
        <motion.button
          className="bg-green-500 text-white px-4 py-2 rounded mr-2 ripple"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeLanguage("en")}
        >
          English
        </motion.button>
        <motion.button
          className="bg-yellow-500 text-white px-4 py-2 rounded ripple"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeLanguage("ta")}
        >
          தமிழ்
        </motion.button>
      </div>
    </div>
  );
};

export default Counter;
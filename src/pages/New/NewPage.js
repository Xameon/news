import { useState } from 'react';
import news from '../../news';
import generateDate from '../../scripts/generateDate';

export default function NewPage() {
  const [header, setHeader] = useState(null);
  const [novelty, setNovelty] = useState(null);

  function sendHandler() {

    if (!novelty) {
      alert('Неможливо зробити пусту новину. Будь ласка, введіть текст у призначене поле.');
      return;
    }

    const confrimed = window.confirm('Підтвердіть дію.');

    if (!confrimed) {
      return;
    }

    const id = news.length === 0 ? 1 : news[news.length - 1].id + 1;
    news.push({
      id: id,
      header: header,
      text: novelty,
      time: generateDate(),
    });
  }

  return (
    <main className='flex-column'>
      <h1 className='red tc mt5'>Додати новину</h1>
      <div className='flex justify-around f2 pa3'>
        <div className='flex-column fw4 white'>
          <div className='red'>Заголовок</div>
          <div>
            <input
              type='text'
              className='fw6 f3 input-new-novelty'
              onChange={(e) => setHeader(e.target.value)}
            ></input>
          </div>
          <div className='red mt3'>Текст</div>
          <div>
            <textarea
              className='f4 input-new-novelty'
              onChange={(e) => setNovelty(e.target.value)}
            ></textarea>
          </div>
          <div className='flex justify-end'>
            <button
              className='send-btn fw6 f3 pa2'
              onClick={() => sendHandler()}
            >
              Готово
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

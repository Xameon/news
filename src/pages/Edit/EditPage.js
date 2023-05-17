import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import news from '../../news';

export default function EditPage() {
  const novelty = useLocation().state;

  const [header, setHeader] = useState(null);
  const [text, setText] = useState(null);

  function saveHandler() {
    if (!text) {
      alert('Неможливо зробити пусту новину. Будь ласка, введіть текст у призначене поле.');
      return;
    }

    const confrimed = window.confirm('Підтвердіть дію.');

    if (!confrimed) {
      return;
    }

    news.forEach((value, key) => {
      if (value.id === novelty.id) {
        news[key].header = header;
        news[key].text = text;
      }
    });
  }
  return (
    <main className='flex-column'>
      <h1 className='yellow tc mt5'>Редагувати новину</h1>
      <div className='flex justify-around f2 pa3'>
        <div className='flex-column fw4 white'>
          <div className='yellow'>Заголовок</div>
          <div>
            <input
              type='text'
              className='fw6 f3 input-new-novelty'
              defaultValue={novelty.header}
              onChange={(e)=>{setHeader(e.target.value)}}
            ></input>
          </div>
          <div className='yellow mt3'>Текст</div>
          <div>
            <textarea
              className='f4 input-new-novelty'
              defaultValue={novelty.text}
              onChange={(e)=>{setText(e.target.value)}}
            ></textarea>
          </div>
          <div className='flex justify-end'>
            <button
              className='send-btn fw6 f3 pa2'
              onClick={() => saveHandler()}
            >
              Зберегти зміни
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

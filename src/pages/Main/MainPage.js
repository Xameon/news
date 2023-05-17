import Novelty from '../../components/Novelty/Novelty';
import news from '../../news';
import { Link } from 'react-router-dom';

export default function MainPage({ isAdmin }) {
  function deleteHandler(id) {
    let confirmed = window.confirm('Ви дійсно хочете видалити цей пост?');

    if (!confirmed) {
      return;
    }

    news.forEach((value, key) => {
      if (value.id === id) {
        delete news[key];
      }
    });
  }

  return (
    <main className='flex justify-center mt5'>
      <div className='news flex flex-column-reverse'>
        {news.map((novelty) => (
          <div key={novelty.id}>
            <Novelty header={novelty.header} text={novelty.text} />
            <div className='flex justify-between'>
              <div>
                {isAdmin && (
                  <div className='red mh3 p3 mb4'>
                    <Link to='/admin/edit' state={novelty}>
                      <button className='edit-del-btn red fw6 f4'>
                        Редагувати пост
                      </button>
                    </Link>
                    <button
                      className='edit-del-btn red fw6 f4'
                      onClick={() => deleteHandler(novelty.id)}
                    >
                      Видалити пост
                    </button>
                  </div>
                )}
              </div>
              <div className='yellow mh3 p3 mb4'>{novelty.time}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

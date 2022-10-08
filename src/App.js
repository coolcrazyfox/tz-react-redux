import  s  from './styles/Main.module.css'
import './App.css';

function App() {
  return (
    <div className={s.main_form}>
        <div className={s.main_box}>
            <div className={s.title}>Карточка студента</div>
            <div className={s.information}> No data</div>
            <div>
                <button className={s.btn}>Добавить</button>
            </div>

        </div>


    </div>
  );
}

export default App;

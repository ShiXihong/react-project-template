import style from './style.module.scss'

export const Loading = () =>
{
  return <div className={style.loader}>
    <div className={style.loaderInner}>
      {
        [1, 2, 3, 4, 5].map((item) =>
        {
          return (
            <div key={item} className={style.loaderLineWrap}>
              <div className={style.loaderLine}></div>
            </div>
          )
        })
      }
    </div>
    <div className={style.text}>加载中...</div>
  </div>
};

export default Loading;

import "./Loading.css";

const Loading = () => (
  <article className="loading">
    <h1 className="loading__message">
      Please wait a bit while we get your invoices
    </h1>
    <div>
      <div className="loading__loader">
        <div className="loading__circle"></div>
        <div className="loading__circle"></div>
        <div className="loading__circle"></div>
        <div className="loading__circle"></div>
        <div className="loading__circle"></div>
      </div>
    </div>
  </article>
);

export default Loading;

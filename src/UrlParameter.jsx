import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  // URLパラメータを取得できる
  const { id } = useParams();
  // クエリーパラメータがsearch内に格納されている
  const { search } = useLocation();
  // URLSearchParamsを使用するとクエリパラメータに関する便利なメソッドが使える
  const query = new URLSearchParams(search);

  console.log(search);

  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータ：{id}</p>
      <p>クエリパラメータ：{query.get("name")}</p>
    </div>
  );
};

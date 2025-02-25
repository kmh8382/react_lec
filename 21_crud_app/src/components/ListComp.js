import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const ListComp = () => {

  const[ serverData, setServerData ] = useState({
    status: 0,
    message: '',
    results: {
      blogList: [],
    },
  });

  const[ queryParams ] = useSearchParams();
  const page = !queryParams.get('page') ? 1 : parseInt(queryParams.get('page'));
  const size = !queryParams.get('size') ? 5 : parseInt(queryParams.get('size'));
  const sort = !queryParams.get('sort') ? 'id,desc' : queryParams.get('sort');

  useEffect(() => {
    const getBlogList = async () => {
      const response = await axios({
        url: 'http://localhost:8080/blogs',
        method: 'get',
        params: {
          page: page,
          size: size,
          sort: sort,
        },
      });
      const jsondata = await response.data;
      // console.log(jsondata);  
      setServerData(jsondata);
    }
    getBlogList();
  }, [page, size, sort]);   // page, size, sort가 변경되면 리렌더링합니다.

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <td>제목</td>
            <td>작성일시</td>
          </tr>
        </thead>
        <tbody>
          {
            serverData.results.blogList.map(blog => 
              <tr key={blog.id}>
                <td>{blog.title}</td>
                <td>{blog.createDt}</td>
              </tr>
            )
          }
        </tbody>

      </table>
    </div>
  );
};

export default ListComp;